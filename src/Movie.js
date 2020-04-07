import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import LinesEllipsis from 'react-lines-ellipsis'


function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Colums">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Colums">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre,index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <div className="Movies_synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        baseOn='letters'
                        />
                </div>
            </div>
        </div>
    );
}


function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
    )
}

function MovieGenres({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired
}


export default Movie;