import React from 'react';
import {shallow} from 'enzyme';
import AlbumList from '../src/AlbumList';

it('starts with a count of 0', () => {
  const albums = [{
      id: 72,
      artist: 'The Beatles',
      albumName: 'Revolver'
  }, {
    id: 31,
    artist: 'Small Faces',
    albumName: 'Ogdens\' Nut Gone Flake'
  }, {
    id: 27,
    artist: 'The Who',
    albumName: 'Quadrophenia'
  }];

  const wrapper = shallow(<AlbumList albums={albums} />);
  const albumComponents = wrapper.find('Album');
  console.log(albumComponents.get(0));
  expect(albumComponents.get(0).key).toBe('72');
  expect(albumComponents.get(0).props.album).toEqual({
      id: 72,
      artist: 'The Beatles',
      albumName: 'Revolver'
  });

  expect(albumComponents.get(1).key).toBe('31');
  expect(albumComponents.get(1).props.album).toEqual({
    id: 31,
    artist: 'Small Faces',
    albumName: 'Ogdens\' Nut Gone Flake'
  });

  expect(albumComponents.get(2).key).toBe('27');
  expect(albumComponents.get(2).props.album).toEqual({
    id: 27,
    artist: 'The Who',
    albumName: 'Quadrophenia'
  });
});
