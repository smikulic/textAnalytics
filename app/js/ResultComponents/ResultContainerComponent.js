import React from "react";
import DisplayStatsComponent from "./_resultStatsComponent";
import DisplayKeywordDensityComponent from "./_resultKeywordDensityComponent";
import DisplayUppercasedComponent from "./_resultUppercasedComponent";
import DisplayLowercasedComponent from "./_resultLowercasedComponent";
import {Tabs, Tab} from 'material-ui/Tabs';


class ResultContainerComponent extends React.Component {
  displayName: 'ResultContainerComponent'

  constructor() {
    super();
  }

  render () {
    let display = null;
    let stringValueProp = this.props.stringValue;
    let occurancesProp = this.props.occurances;

    return (
      <div className="results">
        <Tabs>
          <Tab label="Text Analytics">
            <DisplayStatsComponent stringValue={stringValueProp} occurances={occurancesProp} />
          </Tab>
          <Tab label="Keyword Density">
            <DisplayKeywordDensityComponent stringValue={stringValueProp} occurances={occurancesProp} />
          </Tab>
          <Tab label="Uppercase">
            <DisplayUppercasedComponent stringValue={stringValueProp} />
          </Tab>
          <Tab label="Lowercase">
            <DisplayLowercasedComponent stringValue={stringValueProp} />
          </Tab>
        </Tabs>
      </div>
    );
  }
};

export default ResultContainerComponent;
