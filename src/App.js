import React from "react";
import result from "./data.json";
import InputField from "./InputField";
import SearchButton from "./SearchButton";
import ShowResults from "./ShowResults";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SwitchStyle from "./SwitchStyle";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007BA7"
    },
    secondary: {
      main: "#02e2f2"
    }
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

class App extends React.Component {
  state = {
    inputSphere: 0,
    inputCylinder: 0,
    inputAddition: 0,
    isSphereTouched: false,
    isCylinderTouched: false,
    isAdditionTouched: false,
    results: [],
    darkMode: false
  };

  componentDidMount() {
    this.setState({
      results: result.data
    });
  }
  findResults = (inputSphere, inputCylinder, inputAddition) => {
    this.setState({
      results: this.state.results.filter(e => {
        if (!this.state.isSphereTouched) {
          return (
            inputCylinder <= e.maxCylinder &&
            inputCylinder >= e.minCylinder &&
            inputAddition <= e.maxAddition &&
            inputAddition >= e.minAddition
          );
        } else if (!this.state.isCylinderTouched) {
          return (
            inputSphere <= e.maxSphere &&
            inputSphere >= e.minSphere &&
            inputAddition <= e.maxAddition &&
            inputAddition >= e.minAddition
          );
        } else if (!this.state.isAdditionTouched) {
          return (
            inputSphere <= e.maxSphere &&
            inputSphere >= e.minSphere &&
            inputCylinder <= e.maxCylinder &&
            inputCylinder >= e.minCylinder
          );
        } else {
          return (
            this.state.isSphereTouched &&
            inputSphere <= e.maxSphere &&
            inputSphere >= e.minSphere &&
            inputCylinder <= e.maxCylinder &&
            inputCylinder >= e.minCylinder &&
            inputAddition <= e.maxAddition &&
            inputAddition >= e.minAddition
          );
        }
      })
    });
  };

  onSearch = () => {
    this.findResults(this.state.inputSphere, this.state.inputCylinder, this.state.inputAddition);
    console.log("clicks search button");
  };

  onChange = (key, value) => {
    this.setState({ [key]: value });
    console.log("touched", [key]);
    this.setState({
      isSphereTouched: key === "inputSphere" ? true : false,
      isCylinderTouched: key === "inputCylinder" ? true : false,
      isAdditionTouched: key === "inputAddition" ? true : false
    });
  };
  toggledarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
  };
  render() {
    const {
      darkMode,
      inputSphere,
      inputCylinder,
      inputAddition,
      results
    } = this.state;
    console.log("", this.state.isSphereTouched);
    return (
      <ThemeProvider theme={theme}>
        <div className={darkMode ? "AppDark" : "AppLight"}>
          <Grid className="searchField">
            <InputField
              inputField={inputSphere}
              name="inputSphere"
              label="Sphere"
              onChange={this.onChange}
              type="number"
            />
            <InputField
              inputField={inputCylinder}
              name="inputCylinder"
              label="Cylinder"
              onChange={this.onChange}
              type="number"
            />
            <InputField
              inputField={inputAddition}
              name="inputAddition"
              label="Addition"
              onChange={this.onChange}
              type="number"
            />

            <SearchButton onSearch={this.onSearch} />
          </Grid>
          {this.state.results.length === 0 ? (
            <div>
              <p>Sorry, no results found.</p>
            </div>
          ) : (
            <Grid className={darkMode ? "serchResult" : "serchResultLight"}>
              <ShowResults results={results} />
            </Grid>
          )}
          <SwitchStyle
            darkMode={this.state.darkMode}
            toggledarkMode={this.toggledarkMode}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
