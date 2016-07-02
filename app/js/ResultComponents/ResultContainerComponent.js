import React from "react";
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
    let cxReverse = 'result-tabs--tab';
    let cxUppercase = 'result-tabs--tab';
    let cxLowercase = 'result-tabs--tab';

    switch(this.state.resultView) {
      case 'reverse':
        display = <DisplayReversedComponent stringValue={this.props.stringValue} />;
        cxReverse += ' active';
        cxUppercase, cxLowercase = 'result-tabs--tab';
        break;
      case 'uppercase':
        display = <DisplayUppercasedComponent stringValue={this.props.stringValue} />;
        cxUppercase += ' active';
        cxReverse, cxLowercase = 'result-tabs--tab';
        break;
      case 'lowercase':
        display = <DisplayLowercasedComponent stringValue={this.props.stringValue} />;
        cxLowercase += ' active';
        cxReverse, cxUppercase = 'result-tabs--tab';
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
