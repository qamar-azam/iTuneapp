import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Search from '../Search/index';
import Favourite from '../Favourite/index';

import './App.css';

class App extends Component {

    render() {
        return (
            <div className="page">
                <div className="header">          
                    <h1 className="site-title">iTune App</h1>
                    
                    <nav className="menu">
                        <Link to='/'>Search</Link>
                        <Link to='/favourite'>My Favourites</Link>
                    </nav>
                </div>

                <Switch>
                    <Route exact path='/' component={Search} />                   
                    <Route path='/favourite' component={Favourite} />      
                 </Switch>
            </div>
        );
    }
}

export default App;