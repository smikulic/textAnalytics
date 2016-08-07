import React from "react";
import TextField from 'material-ui/TextField';
import {blue500, white} from 'material-ui/styles/colors';

const styles = {
  textareaStyle: {
    borderColor: blue500,
    backgroundColor: white
  },
};


var InputComponent = React.createClass({
  displayName: 'InputComponent',

  _updateOccurances(text) {
    let wordsArray = text.match(/\w+/g);
    let occurancesObject = {};

    for (var i=0; i < wordsArray.length; i++) {
      let word = wordsArray[i].toLowerCase();
      if (occurancesObject.hasOwnProperty(word)) {
        occurancesObject[word] += 1;
      } else {
        occurancesObject[word] = 1;  
      }
    }
    return occurancesObject;
  },

  _handleChange (e) {
    let value = e.target.value;
    let occurancesObject = this._updateOccurances(value);

    this.props.updateInput(value, occurancesObject);
  },

  render () {
    return (
      <div className="input-text">
        <TextField
          floatingLabelText="Enter text (copy and paste is fine) here..."
          onChange={this._handleChange}
          multiLine={true}
          rows={10}
          rowsMax={10}
          fullWidth={true}
          textareaStyle={styles.textareaStyle}
        />
      </div>
    );
  }
});

export default InputComponent;
