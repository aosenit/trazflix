import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axiox';
import requests from './Request';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  const Truncate = (words, num) => {
    return words?.length > num ? words.substr(0, num) + '...' : words;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My Lists</button>
        </div>
        <h1 className="banner__description">
          {' '}
          {Truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
