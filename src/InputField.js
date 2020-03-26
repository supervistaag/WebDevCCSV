import React from "react";
import TextField from "@material-ui/core/TextField";

class InputFields extends React.Component {
  render() {
    // inputCylinder, inputAddition props added

    const { inputField, onChange, name, darkMode, label } = this.props;

    return (
      <div className={darkMode ? "inputWrap" : "inputWrapLight"}>
        <TextField
          id={name[0]}
          type="number"
          value={inputField[0]}
          onChange={e => onChange(name[0], e.target.value)}
          variant="outlined"
          label={label[0]}
          color={darkMode && "secondary"}
          inputProps={{
            style: { color: darkMode && "#02e2f2" }
          }}
          InputLabelProps={{
            style: { color: darkMode && "#02e2f2" }
          }}
        />

        <TextField
          id={name[1]}
          type="number"
          value={inputField[1]}
          onChange={e => onChange(name[1], e.target.value)}
          variant="outlined"
          label={label[1]}
          color={darkMode && "secondary"}
          inputProps={{
            style: { color: darkMode && "#02e2f2" }
          }}
          InputLabelProps={{
            style: { color: darkMode && "#02e2f2" }
          }}
        />
        <TextField
          id={name[2]}
          type="number"
          value={inputField[2]}
          onChange={e => onChange(name[2], e.target.value)}
          variant="outlined"
          label={label[2]}
          color={darkMode && "secondary"}
          inputProps={{
            style: { color: darkMode && "#02e2f2" }
          }}
          InputLabelProps={{
            style: { color: darkMode && "#02e2f2" }
          }}
        />
      </div>
    );
  }
}

export default InputFields;
