import React from 'react';

export const SearchBar = ({input: keyword, onChange: setKeyword}) => {
    return (
        <div className='search__input__container'>
            <input
                className="search__input"
                key="random1"
                value={keyword}
                placeholder={"Discover and book professionals near you"}
                onChange={(e) => setKeyword(e.target.value)}
            />
        </div>
    );
}