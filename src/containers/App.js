import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import { getConfig, saveConfigToStore } from '../actions';

import { loadFromLocalStorage, saveToLocalStorage } from '../utils';

import Header from '../components/Header';
import Popular from '../pages/Popular';
import TopRated from '../pages/TopRated';
import NowPlaying from '../pages/NowPlaying';
import Favorites from '../pages/Favorites';
import Movie from '../pages/Movie';

class App extends Component {
    componentWillMount() {
        this.loadConfig();
    }

    loadConfig = () => {
        const config = loadFromLocalStorage('config');

        // 2 days === 86400000
        if (config && Date.now() - config.lastFetch < 86400000) {
            this.props.saveConfigToStore(config);
        } else {
            this.props.getConfig()
                .then(() => saveToLocalStorage('config', this.props.config));
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main>
                        <Route exact path="/" component={Popular} />
                        <Route path="/top-rated" component={TopRated} />
                        <Route path="/now-playing" component={NowPlaying} />
                        <Route path="/favorites" component={Favorites} />
                        <Route path="/movie/:id" component={Movie} />
                    </main>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    config: state.get('config'),
});

export default connect(mapStateToProps, { getConfig, saveConfigToStore })(App);
