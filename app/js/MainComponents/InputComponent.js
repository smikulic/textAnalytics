import React from "react";

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
        <textarea placeholder="Input text here..." onChange={this._handleChange}></textarea>
      </div>
    );
  }
});

export default InputComponent;
