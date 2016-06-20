import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Greeting from '../app/greeting';

describe("Greeting Component", function() {
  it("contains class", function() {
    expect(mount(<Greeting />).find('.greeting').length).to.equal(1);
  });

  it('allows us to set props', () => {
    // Use the method 'mount' to perform a full render
    const greetingComponent = mount(<Greeting name='Hello' />);
    expect(greetingComponent.prop('name')).to.equal('Hello');
  });
});
