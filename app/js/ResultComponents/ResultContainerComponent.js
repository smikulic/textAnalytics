import React from "react";
import DisplayReversedComponent from "./_resultReversedComponent";

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
    let cxReverse = 'result-tabs--tab';
    let cxCapital = 'result-tabs--tab';
    let cxLowercase = 'result-tabs--tab';

    switch(this.state.resultView) {
      case 'reverse':
        display = <DisplayReversedComponent stringValue={this.props.stringValue} />;
        cxReverse += ' active';
        cxCapital, cxLowercase = 'result-tabs--tab';
        break;
      case 'capital':
        display = 'Not available yet!';
        cxCapital += ' active';
        cxReverse, cxLowercase = 'result-tabs--tab';
        break;
      case 'lowercase':
        display = 'Not available yet!';
        cxLowercase += ' active';
        cxReverse, cxCapital = 'result-tabs--tab';
        break;
      default:
        display = null;
    }

    return (
      <div className="results">
        <div className="result-tabs">
          <div key="tab-reverse" className={cxReverse}
            onClick={this._handleClick.bind(this, 'reverse')}>
            Reverse
          </div>
          <div key="tab-capital" className={cxCapital}
            onClick={this._handleClick.bind(this, 'capital')}>
            Capital
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
