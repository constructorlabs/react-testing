import React from 'react';
import Counter from '../src/Counter';
import {shallow} from 'enzyme';

describe('Counter component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<Counter/>);
    const text = wrapper.find('span').text();
    expect(text).toEqual('button has been clicked 0 times');
  });

  it('increments counter', () => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find('button').simulate('click');
    const text = wrapper.find('span').text();
    expect(text).toEqual('button has been clicked 1 times');
  });
});
