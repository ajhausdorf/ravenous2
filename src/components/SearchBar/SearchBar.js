import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'highest_rated',
    'Most Reviewed': 'most_reviewed'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        const sortByOptionKeys = Object.keys(sortByOptions);
        sortByOptionKeys.map( o => {
            let sortByOptionValue = sortByOptions.o
            return <li key={sortByOptionValue}>{sortByOptionValue}</li>
        });
    }
    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar