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

// check the json data
console.log("data is here", result.data);

// get the products as an array of objects for less typing/better readibility

const products = result.data;

class App extends React.Component {
  // inputCylinder and inputAddition added to state for search criteria
  state = {
    inputSphere: 0,
    results: [],
    darkMode: false,
    inputCylinder: 0,
    inputAddition: 0
  };

  // componentDidMount added so that all products will be displayed when the page first loads

  componentDidMount() {
    this.setState({
      results: products
    });
  }
  // filter the products based on user input and update the state
  findResults = (inputSphere, inputCylinder, inputAddition) => {
    // checks if user enters a value, otherwise search criteria will be falsy value and it will check the following filter condition
    const finalResult = products
      .filter(product => {
        if (!inputSphere) return true;
        else
          return (
            inputSphere >= product.minSphere && inputSphere <= product.maxSphere
          );
      })
      .filter(product => {
        if (!inputCylinder) return true;
        else
          return (
            inputCylinder >= product.minCylinder &&
            inputCylinder <= product.maxCylinder
          );
      })
      .filter(product => {
        if (!inputAddition) return true;
        else
          return (
            inputAddition >= product.minAddition &&
            inputAddition <= product.maxAddition
          );
      });

    this.setState({ results: finalResult });
  };

  onSearch = () => {
    // console.log("to be done");
    // gets all search filter values from state and pass them to findResults function
    const { inputSphere, inputCylinder, inputAddition } = this.state;

    this.findResults(inputSphere, inputCylinder, inputAddition);
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
      results,
      inputCylinder,
      inputAddition
    } = this.state;

    // searchField object has been created to pass values to InputField as an array so that no need create more props for each input
    const searchFields = {
      inputField: [inputSphere, inputCylinder, inputAddition],
      name: ["inputSphere", "inputCylinder", "inputAddition"],
      label: ["Sphere", "Cylinder", "Addition"]
    };

    return (
      <ThemeProvider theme={theme}>
        <div className={darkMode ? "AppDark" : "AppLight"}>
          <Grid className="searchField">
            <InputField
              inputField={searchFields.inputField}
              name={searchFields.name}
              label={searchFields.label}
              onChange={this.onChange}
            />
            <SearchButton onSearch={this.onSearch} />
          </Grid>
          <Grid className={darkMode ? "serchResult" : "serchResultLight"}>
            <ShowResults results={results} />
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
