import React, { Component } from 'react';

import './Search.css';

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

        this.props.onSearch(this.state.text);
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

export default Search;
