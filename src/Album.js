import React from 'React';

class Album extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <span>{this.props.albumName}</span>
        <span>{this.props.artist}</span>
      </div>
    );
  }
};

export default Album;
