import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import InputComponent from '../../app/js/MainComponents/InputComponent';

describe("InputComponent", () => {
  it("Contains class", () => {
    expect(mount(<InputComponent />).find('.input-text').length).to.equal(1);
  });
});
