
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'




class App extends Component {

  state = {
    greeting:'Hello!',
    movies: [
      {
        title: "Matrix", poster: "https://post-phinf.pstatic.net/MjAxOTA4MjFfMjg0/MDAxNTY2MzQ4ODYxNjM2.dhCDfrjD4gmQAMpqTU2OoPI8Bpbpz--hlO6cWaJXJs0g.Spmg8TZy1V5fFRNhcrRwV5Y6TXvM7JcEJlcRBjAjHAEg.JPEG/81.jpg?type=w1200"
      },
      {
        title: "Oldboy", poster: "https://www.readersnews.com/news/photo/201912/96921_62339_244.jpg"
      },
      {
        title: "star was", poster: "https://post-phinf.pstatic.net/MjAxOTA0MTZfNyAg/MDAxNTU1MzcxODAwOTA1.u9goQ7xANTfZdBhYTmtSK3bgE3yl0u66CHDE-S61CGog.EJ_bfU0Bww6Q6b55j4TeI30RNJpne4-Za2jsTESev5gg.JPEG/sw_ros_main.jpg?type=w1200&type=w1200"
      }
    ]
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
    
  render() {
    return (
      <div className='App'>
        {this.state.movies.map((movie, index) => {
          return<Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
