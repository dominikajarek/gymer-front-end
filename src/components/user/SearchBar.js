import React from 'react';

export const SearchBar = ({input:keyword, onChange:setKeyword}) => {
    return (
            <input
                className="search__input"
                key="random1"
                value={keyword}
                placeholder={"Discover and book professionals near you"}
                onChange={(e) => setKeyword(e.target.value)}
            />
    );
}