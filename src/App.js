import React from 'react';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        {/* Render home page or Search page */}
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>


        <Footer />
      </Router>
    </div>
  );
}

export default App;
