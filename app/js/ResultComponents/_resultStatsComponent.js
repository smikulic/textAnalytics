import React from "react";
import CounterComponent from "./_counterComponent";

const BLACKLISTED_KEYWORDS = ['and', 'the', 'i', 'a', 'of', 'on', 'to', 'is'];

var ResultStatsComponent = React.createClass({
  displayName: 'ResultStatsComponent',

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
    let wordOccurances = this.props.occurances;
    let sortedWordOccurances = [];
    let topWordOccurancesLimit = 5;
    let topWordOccurances = {};
    let topWordsDisplay = null;
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
        <li key={key} className="col-1-5">
          <div>{wordData[0]}</div>
          <div className="number">
            {wordData[1]} 
            <span className="percentage">({Math.round(wordData[1] / wordCount * 100, 2)}%)</span>
            </div>
        </li>
      );

      return result;
    });

    return (
      <div className="result-stats">
        <hr className="bordered" />
        <div className="col-1-4">
          <CounterComponent name="Characters" numberValue={charCount} />
        </div>
        <div className="col-1-4">
          <CounterComponent name="Words" numberValue={wordCount} />
        </div>
        <div className="col-1-4">
          <CounterComponent name="Sentences" numberValue={sentenceCount} />
        </div>
        <div className="col-1-4">
          <CounterComponent name="Read time" numberValue={readTime} />
        </div>
        <hr className="bordered" />
        <div className="col-1-1">
          Keyword density
          <ul>{topWordsDisplay}</ul>
        </div>
      </div>
    );
  }
});

export default ResultStatsComponent;
