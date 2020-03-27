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
    initialStaticData: result.data,
    currentResults: [],
    darkMode: false
  };

  findResults = (attr, param) => {
    const { initialStaticData } = this.state;
    const filtered = initialStaticData.filter(
      product =>
        product["min" + attr] <= param && param <= product["max" + attr] // filtering inclusive
    );
    this.setState({ currentResults: filtered });
  };

  onSearchSphere = () => {
    const { inputSphere } = this.state;
    this.findResults("Sphere", inputSphere);
  };

  onSearchCylinder = () => {
    const { inputCylinder } = this.state;
    this.findResults("Cylinder", inputCylinder);
  };

  onSearchAddition = () => {
    const { inputAddition } = this.state;
    this.findResults("Addition", inputAddition);
  };

  onChange = (key, value) => {
    this.setState({ [key]: value });
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
      initialStaticData,
      currentResults
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div className={darkMode ? "AppDark" : "AppLight"}>
          <Grid className="searchField">
            <InputField
              inputField={inputSphere}
              name="inputSphere"
              label="Sphere"
              onChange={this.onChange}
            />
            <SearchButton onSearch={this.onSearchSphere} />
          </Grid>
          <Grid className="searchField">
            <InputField
              inputField={inputCylinder}
              name="inputCylinder"
              label="Cylinder"
              onChange={this.onChange}
            />
            <SearchButton onSearch={this.onSearchCylinder} />
          </Grid>
          <Grid className="searchField">
            <InputField
              inputField={inputAddition}
              name="inputAddition"
              label="Addition"
              onChange={this.onChange}
            />
            <SearchButton onSearch={this.onSearchAddition} />
          </Grid>
          <Grid className={darkMode ? "serchResult" : "serchResultLight"}>
            {currentResults.length > 0 ? (
              <ShowResults results={currentResults} />
            ) : (
              <ShowResults results={initialStaticData} />
            )}
          </Grid>
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
