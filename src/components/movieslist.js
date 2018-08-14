import React from 'react';
const MoviesList = (props) => {
	console.log(props);
	renderMovies = (movies) => (
    movies ? 
      movies.map((item,i) => (
        <div key={i}>
        {item.name}
        </div>

      )): null
  )

  return (
      <div>{renderMovies(props.data.movies)}</div>
  );
}

export default MoviesList;