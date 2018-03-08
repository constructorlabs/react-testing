import React from 'React';
import Album from './Album';

class AlbumList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const albumList = this.props.albums.map( album => {
      return <Album album={album} key={album.id} />;
    });

    return (
      <div>
        {albumList}
      </div>
    );
  }
};

export default AlbumList;
