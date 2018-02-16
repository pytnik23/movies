import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import MdSearch from 'react-icons/lib/md/search';

class Search extends Component {
    state = {
        text: '',
    };

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.text) {
            this.props.onSearch(this.state.text);
            this.resetInput();
        }
    }

    resetInput = () => {
        this.setState({ text: '' });
    }

    render() {
        return (
            <form
                className="search"
                onSubmit={this.handleSubmit}
            >
                <input
                    className="search__input"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    type="search"
                    placeholder="Search..."
                />
                <button
                    className="search__button"
                    type="submit"
                >
                    <MdSearch size={20} />
                </button>
            </form>
        );
    }
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Search;
