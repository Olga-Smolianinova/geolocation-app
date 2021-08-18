import React, { useState, useEffect } from 'react';

// Components
import Logo from './components/Logo';
import Searchbar from './components/Searchbar';
import Results from './components/Results';

import geoApi from './api/geo-api';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]); //'Enter IP and press “Search” to get geolocation data'
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGeolocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const fetchGeolocation = async () => {
    try {
      //   выводим в отдельную переменную  searchQuery для того, чтобы передать options в props в weather-api.js;
      const options = { searchQuery, error };

      //   сотояние загрузки, меняем значение
      setIsLoading(true);

      //проверка на то, если пользователь ничего не ввел в input, не отправлять http-запрос
      if (!searchQuery) {
        return;
      }

      // вызов функции из файла который прописывает логику настроек Api (geo-api.js)
      const response = await geoApi.fetchGeolocation(options);
      console.log(response);

      setResults([...results, response]);

      if (!response) {
        throw new Error('Something went wrong 😞. Please try again.');
      }
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const changeQuery = query => {
    setSearchQuery(query);
    setResults([]);
    setError(null);
  };

  return (
    <>
      <div className="App">
        <Logo />
        <Searchbar onSubmit={changeQuery} />

        {results.length > 0 ? (
          <Results results={results} />
        ) : (
          <p>Enter IP and press “Search” to get geolocation data</p>
        )}

        {error && <p className="error-msg">{error.message}</p>}
      </div>
    </>
  );
}

export default App;
