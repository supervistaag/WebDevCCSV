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
// pass it to the results state as initial value
// so that they will be displayed when the page first loads
const products = result.data;

class App extends React.Component {
  state = {
    inputSphere: 0,
    results: products,
    darkMode: false,
    inputCylinder: 0,
    inputAddition: 0
  };

  // filter the products based on user input and update the state
  findResults = inputSphere => {
    let filteredProducts = products.filter(product => {
      if (inputSphere > product.minSphere && inputSphere < product.maxSphere)
        return true;
    });

    console.log("filtered: ", filteredProducts);

    this.setState({ results: filteredProducts });
  };

  onSearch = () => {
    // console.log("to be done");
    this.findResults(this.state.inputSphere);
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
    // add inputSphere and inputAddition variables as search values
    // pass these props to Inputfield to be used in findResults()

    const {
      darkMode,
      inputSphere,
      results,
      inputCylinder,
      inputAddition
    } = this.state;

    const searchFields = {
      inputField: [inputSphere, inputCylinder, inputAddition],
      name: ["inputSphere", "inputCylinder", "inputAddition"],
      label: ["Sphere", "Cylinder", "Addition"]
    };

    // console.log("names", searchFields.name);
    return (
      <ThemeProvider theme={theme}>
        <div className={darkMode ? "AppDark" : "AppLight"}>
          <Grid className="searchField">
            <InputField
              inputField={searchFields.inputField} //{inputSphere} //
              name={searchFields.name} //"inputSphere" //
              label={searchFields.label} //"Sphere" //
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
