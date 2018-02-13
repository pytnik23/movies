import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Search from '../components/Search';

class MovieSearch extends Component {
    handleSearch = (query) => {
        this.props.history.push(`/movies/${query}`);
        // this.props.history.go();
    }

    render() {
        return (
            <Search onSearch={this.handleSearch} />
        );
    }

}

export default withRouter(MovieSearch);
