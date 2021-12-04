import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Error from './Components/Error';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import Service from './Components/Services';

// eslint-disable-next-line react/function-component-definition
export default function App() {
    const isLoggedIn = false;
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                {/* <Route exact path="/service" render={() => <Service number="5" />} /> */}
                <Route exact path="/service">
                    <Service number="5" />
                </Route>

                <Route exact path="/posts/:category/:libary" component={Posts} />
                <Route exact path="/dashboard" component={Dashboard} />

                <Route exact path="/login">
                    {isLoggedIn ? <Redirect to="/dashboard" /> : <Home />}
                </Route>
                <Route component={Error} />
            </Switch>
        </Router>
    );
}
