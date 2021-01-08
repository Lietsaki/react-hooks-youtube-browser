import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');

  const updateTerm = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Invoke callback from parent component
    onFormSubmit(query);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} action="" className="ui form">
        <div className="field">
          <label htmlFor="yt-search">
            Search for videos on YouTube, this is an amazing Netlify app...
          </label>
          <input value={query} onChange={updateTerm} type="text" name="yt" id="yt-search" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
