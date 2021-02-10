import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GymSite from './components/GymSite';
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";

import './index.css';

function App() {
  return (
    <div className=
             'text-black py-3 border h-6xl
             mx-8 w-6xl bg-white 2xl:bg-opacity-95
             flex justify-center shadow-lg'
    >
        <Router>
            <Categories />
            <Header />
            <Switch>
                <Route exact path={'/'}>
                    <Home />
                </Route>
                <Route exact path={'/gymsite'}>
                    <GymSite />
                </Route>
                <Route exact path={'/calendar'}>
                    <Calendar />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
