import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import { HeroContext } from '../HeroContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
	<>
    <Router>
      <HeroContext.Provider value={{searchResults, setSearchResults}}>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
          >
            <Search />
          </Route>
        </Switch>
      </HeroContext.Provider>
    </Router>
	</>
  );
}

export default App;