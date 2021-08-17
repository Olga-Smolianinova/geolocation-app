import React, { useState } from 'react';

import './Searchbar.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    //  передача  props onSubmit из App.js для обработки действий когда будет изменяться query
    onSubmit(query);

    //   обновление input
    setQuery('');
  };

  const handleChange = event => {
    setQuery(event.currentTarget.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="8.8.8.8"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </header>
  );
}
