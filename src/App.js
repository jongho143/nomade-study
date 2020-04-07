
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'




class App extends Component {

  state = {
    
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title : "Transportting",
            poster : "https://post-phinf.pstatic.net/MjAxOTA0MTZfNyAg/MDAxNTU1MzcxODAwOTA1.u9goQ7xANTfZdBhYTmtSK3bgE3yl0u66CHDE-S61CGog.EJ_bfU0Bww6Q6b55j4TeI30RNJpne4-Za2jsTESev5gg.JPEG/sw_ros_main.jpg?type=w1200&type=w1200"
          }
        ]
      })
    }, 5000)
  }
    

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }
  render() {
    return (
      <div className='App'>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
