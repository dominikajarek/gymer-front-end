import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GymSite } from './components/partner/GymSite';
import { Calendars } from "./components/partner/Calendar";
import { Header } from "./components/main/Header";
import { Home } from "./components/main/Home";
import { LeftMenu } from "./components/main/LeftMenu";
import { Gyms } from "./components/categories/Gyms";
import { Fitness } from "./components/categories/Fitness";
import { PersonalTrainers } from "./components/categories/PersonalTrainers";
import { UserSlots } from './components/user/UserSlots';
import { Profile } from './components/user/Profile';
import { Dashboard } from "./components/user/Dashboard";
import { Login } from "./components/main/Login";
import { Register } from './components/main/Register';
import { Activation } from './components/main/Activation';
import { LoginViaGoogleActivation } from "./components/main/LoginViaGoogleActivation";

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
                      <Route exact path={'/verify'} component={ Activation } />
                      <Route exact path={'/google'} component={ LoginViaGoogleActivation } />
                      <Route exact path={'/login'} component={ Login } />
                      <Route exact path={'/register'} component={ Register } />
                      <Route exact path={'/'} component={ Home } />
                      <Route exact path={'/gymsite/:id'} ><GymSite /></Route>
                      <Route exact path={'/calendar/:id'} ><Calendars /></Route>
                      <Route exact path={'/user-slots'} component={ UserSlots } />
                      <Route exact path={'/profile'} component={ Profile } />
                      <Route exact path={'/dashboard'} component={ Dashboard } />
                  </Switch>
                  <div className='categories'>
                      <Route exact path={'/gyms'} component={ Gyms } />
                      <Route exact path={'/fitness'} component={ Fitness } />
                      <Route exact path={'/personal-trainers'} component={ PersonalTrainers } />
                  </div>
              </div>
          </Router>
      </div>
  );
}