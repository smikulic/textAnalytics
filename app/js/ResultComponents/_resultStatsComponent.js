import React from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const BLACKLISTED_KEYWORDS = ['and', 'the', 'i', 'a', 'of', 'on', 'to', 'is'];


var ResultStatsComponent = React.createClass({
  displayName: 'ResultStatsComponent',

  getInitialState: function() {
    return {
      fixedHeader: true,
      showRowHover: true,
      selectable: true,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
    };
  },

  _calculateReadTime (wordCount, averageWordsPerMinute) {
    let wordsPerAverage = wordCount / averageWordsPerMinute;
    let result = wordsPerAverage.toPrecision(2) + ' min';

    if (wordsPerAverage < 1) {
      result = (wordsPerAverage * 60).toPrecision(2) + ' s';
    }

    return result;
  },

  render () {
    let textEntered = this.props.stringValue;
    let charCount = textEntered.length;
    let wordCount = 0;
    let sentenceCount = 0;
    let readTime = 0;
    let averageWordsPerMinute = 275;

    // Character count
    if (charCount > 0) {
      wordCount = textEntered.split(' ').length;
    }

    // Word count
    if (wordCount > 0) {
      sentenceCount = ( textEntered.match(/\w[.?!](\s|$)/g) || [] ).length;
      readTime = this._calculateReadTime(wordCount, averageWordsPerMinute);
    }


    return (
      <div className="result-stats">
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableHeaderColumn>Property</TableHeaderColumn>
              <TableHeaderColumn>Value</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
          >
            <TableRow>
              <TableRowColumn>Read time</TableRowColumn>
              <TableRowColumn>{readTime}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Characters</TableRowColumn>
              <TableRowColumn>{charCount}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Words</TableRowColumn>
              <TableRowColumn>{wordCount}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Sentences</TableRowColumn>
              <TableRowColumn>{sentenceCount}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
});

export default ResultStatsComponent;
