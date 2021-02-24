import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { AuthContext } from "./components/main/Auth";
import { GymSite } from './components/gymSite/GymSite';
import { Calendars } from "./components/gymSite/Calendar";
import { Header } from "./components/main/Header";
import { Home } from "./components/main/Home";
import { LeftMenu } from "./components/main/LeftMenu";
import { Gyms } from "./components/categories/Gyms";
import { Fitness } from "./components/categories/Fitness";
import { PersonalTrainers } from "./components/categories/PersonalTrainers";
import { UserSlots } from './components/user/UserSlots';
import { Profile } from './components/user/Profile';
import { Dashboard } from "./components/user/Dashboard";
import { Navigation } from "./components/gymSite/Navigation";
import { Login } from './components/main/Login';
import { Register } from './components/main/Register';

import './index.css';

export const App = () => {

  return (
      <div className='router'>
          <Router>
              <div className='main-menu'>
                  <LeftMenu />
              </div>
              <div className='header'>
                  <Header />
              </div>
              <div className='content'>
                  <Switch>
                      <Route exact path={'/login'} component={ Login } />
                      <Route exact path={'/register'} component={ Register } />
                      <Route exact path={'/'} component={ Home } />
                      <Route exact path={'/gymsite'} ><Navigation /><GymSite /></Route>
                      <Route exact path={'/calendar'} ><Navigation /><Calendars /></Route>
                      <Route exact path={'/gyms'} component={ Gyms } />
                      <Route exact path={'/fitness'} component={ Fitness } />
                      <Route exact path={'/personal-trainers'} component={ PersonalTrainers } />
                      <Route exact path={'/user-slots'} component={ UserSlots } />
                      <Route exact path={'/profile'} component={ Profile } />
                      <Route exact path={'/dashboard'} component={ Dashboard } />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}