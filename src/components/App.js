import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getConfig, saveConfigToStore } from '../actions';

import { loadFromLocalStorage, saveToLocalStorage } from '../utils';

import Header from './Header';
import List from './List';
import Spinner from './Spinner';

class App extends Component {
    componentDidMount() {
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
        const { config, isFetching } = this.props;
        return (
            <div>
                <Header />
                <div className="container">
                    {
                        config.images
                        && <List />
                    }
                    {
                        isFetching
                        && <Spinner />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        config: state.config,
        isFetching: state.movies.isFetching
    };
};

export default connect(mapStateToProps, { getConfig, saveConfigToStore })(App);
