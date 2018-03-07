import React from 'react';
import fetchMock from 'fetch-mock';
import {shallow} from 'enzyme';
import DisplayMovie from '../src/DisplayMovie';

describe('Counter component', () => {
  describe('fetch and display', () => {
    beforeEach(() => {
      fetchMock.get('*', {
        Title:'My awesome movie'
      });
    });

    it('increments counter', done => {
      const wrapper = shallow(<DisplayMovie />);
      const button = wrapper.find('button').simulate('click');

      setTimeout(() => {
        const update = wrapper.update();
        const text = update.find('h1').text();
        expect(text).toEqual('My awesome movie');
        done();
      }, 0);
    });

    afterEach(() => {
      fetchMock.restore();
    });
  });
});
