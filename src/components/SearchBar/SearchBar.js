import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'highest_rated',
            'Most Reviewed': 'most_reviewed'
        };
    }

    renderSortByOptions() {
        const sortByOptionKeys = Object.keys(this.sortByOptions);
        return sortByOptionKeys.map( sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (
                <li key={sortByOptionValue}
                    className={this.getSortByClass(sortByOptionValue)}
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> 
                    {sortByOption}
                </li>
            );
        });
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return "active"
        }
        return ''
    }
    
    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
    }

    handleTermChange(e) {
        this.setState({ 
            term: e.target.value 
        })
    }

    handleLocationChange(e) { 
        this.setState({ 
            location: e.target.value 
        })
    }

    handleSearch(e) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        { this.renderSortByOptions() }
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;