import React from "react";
import DisplayStatsComponent from "./_resultStatsComponent";
import DisplayKeywordDensityComponent from "./_resultKeywordDensityComponent";
import ModifiedTextComponent from "./_modifiedTextComponent";
import {Tabs, Tab} from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

const style = {
  button: {
    margin: '12px 12px 12px 0'
  }
}

class ResultContainerComponent extends React.Component {
  displayName: 'ResultContainerComponent'

  constructor() {
    super();
  }

  state = {
    open: false,
    openSnackbar: false,
    dialogDisplay: 'Uppercase'
  };

  _handleOpen = (event) => {
    this.setState({open: true, dialogDisplay: event.target.innerHTML});
  };

  _handleClose = () => {
    this.setState({open: false});
  };

  _notifySelectedText = () => {
    this.setState({openSnackbar: true});
  };

  _closeSnackbar = () => {
    this.setState({openSnackbar: false});
  };

  _selectElementContents = () => {
    var range = document.createRange();
    range.selectNodeContents(document.getElementById("select-all-text"));
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    this._notifySelectedText();
  }

  render () {
    let stringValueProp = this.props.stringValue;
    let occurancesProp = this.props.occurances;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        style={style.button}
        onTouchTap={this._handleClose}
      />,
      <FlatButton
        label="Select all"
        primary={true}
        style={style.button}
        keyboardFocused={true}
        onTouchTap={this._selectElementContents}
      />,
    ];


    return (
      <div className="results">
        <RaisedButton label="Uppercase" primary={true} style={style.button} onTouchTap={this._handleOpen} />
        <RaisedButton label="Lowercase" primary={true} style={style.button} onTouchTap={this._handleOpen} />
        <RaisedButton label="Capitalize" primary={true} style={style.button} onTouchTap={this._handleOpen} />
        <RaisedButton label="Reversed" primary={true} style={style.button} onTouchTap={this._handleOpen} />
        <RaisedButton label="Clear Extra Whitespace" primary={true} style={style.button} onTouchTap={this._handleOpen} />
        <Tabs>
          <Tab label="Text Analytics">
            <DisplayStatsComponent stringValue={stringValueProp} occurances={occurancesProp} />
          </Tab>
          <Tab label="Keyword Density">
            <DisplayKeywordDensityComponent stringValue={stringValueProp} occurances={occurancesProp} />
          </Tab>
        </Tabs>
        <Dialog
            title="Copy modified text"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this._handleClose}
            autoScrollBodyContent={true}
          >
            <div id="select-all-text">
              <ModifiedTextComponent stringValue={stringValueProp} action={this.state.dialogDisplay} />
            </div>
          </Dialog>
          <Snackbar
            open={this.state.openSnackbar}
            message="Click CMD + C (CTRL + C if on Windows)"
            autoHideDuration={4000}
            onRequestClose={this._closeSnackbar}
          />
      </div>
    );
  }
};

export default ResultContainerComponent;
