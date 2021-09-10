import React from 'react';
import search from '../Assets/Images/search.png';
import '../Assets/Styles/searchbar.scss'

const SearchBar = () => {
    return (
        <div className="search-div">
            <img src={search}/>
            <input type="text" placeholder="Search"/>
        </div>
    )
}

export default SearchBar
