import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ResultReversedComponent from '../../app/js/ResultComponents/ResultReversedComponent';

describe("ResultReversedComponent", () => {
  // Use the method 'mount' to perform a full render
  const testString = "This is my test string.";
  const ResultReversedComponentMounted = mount(<ResultReversedComponent stringValue={testString} />);

  it("Contains classes", () => {
    expect(ResultReversedComponentMounted.find('.result-reversed').length).to.equal(1);
    expect(ResultReversedComponentMounted.find('.result-reversed .result').length).to.equal(1);
  });

  it('Should have stringValue prop', () => {
    expect(ResultReversedComponentMounted.prop('stringValue')).to.equal(testString);
  });

  it("Should reverse text string", () => {
    let reversedText = testString.split("").reverse().join("");
    
    expect(render(<ResultReversedComponent stringValue={testString} />).find('.result')[0].children[0].data)
    .to.equal(reversedText);
  });
});
