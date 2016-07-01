import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import StatsContainerComponent from '../../app/js/StatsComponents/StatsContainerComponent';
import CounterComponent from '../../app/js/StatsComponents/CounterComponent';

describe("StatsContainerComponent", () => {
  // Use the method 'mount' to perform a full render
  const stringValue = "Word Counter is a word count and a character count tool. Simply place your cursor into the box and begin typing. Word counter will automatically count the number of words and characters as you type. You can also copy and paste a document you have already written into the word counter box and it will display the word count and character numbers for that piece of writing. Knowing the number of words or characters in a document can be important. For example, if the author is required to write a minimum or maximum amount of words for an article or paper, word counter can help them know if their article meets these requirements. In addition, word counter automatically shows you the top 10 keywords and keyword density of the article you're writing. This allows you to know what keywords you use most often and what percentage each is used within the article. This can help you from over-using certain words in your writing and allow you to make sure you have the correct keyword distribution you're trying to obtain for any article you write. Word counts can also be important in defining typing and reading speeds. Word counter can help determine both of these. Simply set a timer and start typing and when the time is up, you'll instantly know how many words you have typed for that period of time.";
  const StatsContainerComponentMounted = mount(<StatsContainerComponent stringValue={stringValue} />);
  const StatsContainerComponentShallow = shallow(<StatsContainerComponent stringValue={stringValue}  />);

  it("Contains classes", () => {
    expect(StatsContainerComponentMounted.find('.stats-container').length).to.equal(1);
  });

  it('Renders four <CounterComponent /> components', () => {
    expect(StatsContainerComponentShallow.find(CounterComponent)).to.have.length(4);
  });

  it("Displays correct read time stat", () => {
    expect(StatsContainerComponentShallow.find(CounterComponent).nodes[3].props.numberValue).to.equal('50 s');
  });

  it("Displays correct character, word and sentence count", () => {
    expect(StatsContainerComponentShallow.find(CounterComponent).nodes[0].props.numberValue).to.equal(1304);
    expect(StatsContainerComponentShallow.find(CounterComponent).nodes[1].props.numberValue).to.equal(231);
    expect(StatsContainerComponentShallow.find(CounterComponent).nodes[2].props.numberValue).to.equal(12);
  });
});
