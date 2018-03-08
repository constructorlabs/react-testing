import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import SearchField from '../src/SearchField';

describe('SearchField', () => {
  it('correctly renders tree', () => {
    const tree = renderer.create(<SearchField />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('captures and renders user input', () => {
    const event = {
      target: {
        value: 'Barbara Streisand'
      }
    };
    const wrapper = shallow(<SearchField />);
    wrapper.find('input').simulate('change', event);
    const value = wrapper.find('input').props().value;
    expect(value).toBe('Barbara Streisand');
  });

  it('calls receiver prop function with value state', () => {
    const receiver = jest.fn();
    const event = {
      preventDefault: jest.fn()
    };

    const wrapper = shallow(<SearchField receiver={receiver} />);
    wrapper.setState({ value: 'Paul Anka' });
    wrapper.find('form').simulate('submit', event);

    expect(receiver.mock.calls).toEqual([
      ['Paul Anka']
    ]);

    expect(event.preventDefault.mock.calls).toEqual([ [] ]);
  });
});
