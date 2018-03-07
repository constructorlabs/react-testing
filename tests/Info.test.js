import React from 'react';
import Info from '../src/Info';
import renderer from 'react-test-renderer';

describe('Info', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Info />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
