import React from "react";
import DisplayStatsComponent from "./_resultStatsComponent";
import DisplayReversedComponent from "./_resultReversedComponent";
import DisplayUppercasedComponent from "./_resultUppercasedComponent";
import DisplayLowercasedComponent from "./_resultLowercasedComponent";

class ResultContainerComponent extends React.Component {
  displayName: 'ResultContainerComponent'

  constructor() {
    super();

    this.state = {
      resultView: 'default'
    };
  }

  _handleClick (index, event) {
    this.setState({
      resultView: index
    });
  }

  render () {
    let display = null;
    let stringValueProp = this.props.stringValue;
    let occurancesProp = this.props.occurances;
    let cxStats = 'result-tabs--tab';
    let cxReverse = 'result-tabs--tab';
    let cxUppercase = 'result-tabs--tab';
    let cxLowercase = 'result-tabs--tab';

    switch(this.state.resultView) {
      case 'reverse':
        display = <DisplayReversedComponent stringValue={stringValueProp} />;
        cxReverse += ' active';
        break;
      case 'uppercase':
        display = <DisplayUppercasedComponent stringValue={stringValueProp} />;
        cxUppercase += ' active';
        break;
      case 'lowercase':
        display = <DisplayLowercasedComponent stringValue={stringValueProp} />;
        cxLowercase += ' active';
        break;
      default:
        display = <DisplayStatsComponent stringValue={stringValueProp} occurances={occurancesProp} />;
        cxStats += ' active';
    }

    return (
      <div className="results">
        <div className="result-tabs">
          <div key="tab-stats" className={cxStats}
            onClick={this._handleClick.bind(this, 'stats')}>
            Text Analytics
          </div>
          <div key="tab-reverse" className={cxReverse}
            onClick={this._handleClick.bind(this, 'reverse')}>
            Reverse
          </div>
          <div key="tab-uppercase" className={cxUppercase}
            onClick={this._handleClick.bind(this, 'uppercase')}>
            Uppercase
          </div>
          <div key="tab-lowercase" className={cxLowercase}
            onClick={this._handleClick.bind(this, 'lowercase')}>
            Lowercase
          </div>
        </div>
        {display}
      </div>
    );
  }
};

export default ResultContainerComponent;
