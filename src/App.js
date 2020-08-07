import React, { Component } from 'react'
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import SearchPage from './SearchPage/SearchPage.js';
import DetailPage from './DetailPage/DetailPage.js';
import Header from './Header.js'

export default class App extends Component {
  render() {
    return (
        <div >
            <Router>
              <Header />
              <span className="nav">
                <Link to="/detail">Detail</Link>
              </span>
              <span className="nav">
                <Link to="/">Home</Link>
              </span>
                <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <SearchPage {...routerProps} />} 
                    />
                    
                    <Route 
                      path="/detail/:myPokemonId" 
                      exact
                      render={(routerProps) => <DetailPage {...routerProps} />} 
                    />
                </Switch>
            </Router>
        </div>
    )
}
}


