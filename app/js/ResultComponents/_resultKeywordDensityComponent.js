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

  render () {
    let textEntered = this.props.stringValue;
    let wordOccurances = this.props.occurances;
    let sortedWordOccurances = [];
    let topWordOccurancesLimit = 10;
    let topWordOccurances = {};
    let topWordsDisplay = null;
    let charCount = textEntered.length;
    let wordCount = 0;

    // Character count
    if (charCount > 0) {
      wordCount = textEntered.split(' ').length;
    }

    // Loop through all word occurances
    for (var word in wordOccurances) {
      // Check if word is blacklisted from occurances
      if (BLACKLISTED_KEYWORDS.indexOf(word) > -1) {
        // In the array! do nothing
      } else {
        sortedWordOccurances.push([word, wordOccurances[word]]);
        sortedWordOccurances.sort(
          function(a, b) {
            return a[1] - b[1]
          }
        );
      }
    }

    // Sort by amount of words appeared
    let sortedWordOccurancesCount = sortedWordOccurances.length;
    if (sortedWordOccurancesCount > topWordOccurancesLimit) {
      topWordOccurances = sortedWordOccurances.slice(sortedWordOccurancesCount - topWordOccurancesLimit, sortedWordOccurancesCount);  
    } else {
      topWordOccurances = sortedWordOccurances;
    }

    // Top five word occurances display
    topWordsDisplay = topWordOccurances.map( (wordData, index) => {
      let key = "occurance-" + index;
      let result = (
        <TableRow key={key}>
          <TableRowColumn>{index + 1}</TableRowColumn>
          <TableRowColumn>{wordData[0]}</TableRowColumn>
          <TableRowColumn>{wordData[1]}</TableRowColumn>
          <TableRowColumn>{Math.round(wordData[1] / wordCount * 100, 2)}%</TableRowColumn>
        </TableRow>
      );

      return result;
    });

    return (
      <div className="result-stats">
        <div className="col-1-1">
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
                <TableHeaderColumn>Order</TableHeaderColumn>
                <TableHeaderColumn>Word</TableHeaderColumn>
                <TableHeaderColumn>Occurances</TableHeaderColumn>
                <TableHeaderColumn>Percentage</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
            >
              {topWordsDisplay}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
});

export default ResultStatsComponent;
