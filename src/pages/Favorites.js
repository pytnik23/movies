import React from 'react';
import { connect } from 'react-redux';

import PageCaption from '../components/PageCaption';
import MoviesGrid from '../containers/MoviesGrid';

const getFavorites = movies => {
    return movies.reduce((ids, movie) => {
        if (movie.get('isFavorite')) {
            ids.push(movie.get('id'));
        }
        return ids;
    }, []);
};

const Favorites = ({ ids }) => (
    <div>
        <PageCaption>
            Favorites movies
        </PageCaption>
        { !!ids && <MoviesGrid ids={ids} /> }
    </div>
);

const mapStateToProps = state => ({
    ids: getFavorites(state.getIn(['movies', 'items'])),
});

export default connect(mapStateToProps)(Favorites);
