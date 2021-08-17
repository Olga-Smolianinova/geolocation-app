import React, { useState, useEffect } from 'react';

// Components
import Logo from './components/Logo';
import Searchbar from './components/Searchbar';
import Results from './components/Results';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(
    'Enter IP and press “Search” to get geolocation data',
  );

  const changeQuery = query => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Logo />
      <Searchbar onSubmit={changeQuery} />
      <Results results={results} />
    </div>
  );
}

export default App;
