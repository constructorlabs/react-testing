import React from 'react';

class DisplayMovie extends React.Component {
  constructor(props){
    super(props);

    this.state = {movie: null}

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  fetchMovie(){
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=2cda7206')
      .then(response => response.json())
      .then(movie => this.setState({ movie }));
  }

  render(){
    const movie = this.state.movie ? <h1>{this.state.movie.Title}</h1> : null;
    return (
      <div>
        <button onClick={this.fetchMovie}>Fetch movie</button>
        {movie}
      </div>
    )
  }
};

export default DisplayMovie;
