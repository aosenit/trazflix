import React from 'react';
import Banner from '../Banner';
import './HomeScreen.css';
import NavBar from '../NavBar';
import Row from '../Row';
import requests from '../Request';

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar />

      <Banner />

      <Row
        title="TRAZFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetctComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default HomeScreen;
