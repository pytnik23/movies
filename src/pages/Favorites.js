import React from 'react';

import { getFavoriteMovies } from '../selectors';

import PageCaption from '../components/PageCaption';
import MoviesGrid from '../containers/MoviesGrid';

const Favorites = () => (
    <div className="container">
        <PageCaption>
            Favorites movies
        </PageCaption>
        <MoviesGrid getCurrentMovies={getFavoriteMovies} />
    </div>
);

export default Favorites;
