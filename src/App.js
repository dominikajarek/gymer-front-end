import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthContext } from "./components/main/Auth";
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
import { PrivateRoute } from "./components/PrivateRoute";
import { UserForm } from './components/forms/UserForm';

import './index.css';

export const App = (props) => {

    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }

  return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
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
                          <Route exact path={'/login'} component={ UserForm } />
                          <Route exact path={'/register'} />
                          <Route exact path={'/'} component={ Home } />
                          <Route exact path={'/gymsite'} ><Navigation /><GymSite /></Route>
                          <Route exact path={'/calendar'} ><Navigation /><Calendars /></Route>
                          <Route exact path={'/gyms'} component={ Gyms } />
                          <Route exact path={'/fitness'} component={ Fitness } />
                          <Route exact path={'/personal-trainers'} component={ PersonalTrainers } />
                          <PrivateRoute exact path={'/user-slots'} component={ UserSlots } />
                          <PrivateRoute exact path={'/profile'} component={ Profile } />
                          <PrivateRoute exact path={'/dashboard'} component={ Dashboard } />
                      </Switch>
                  </div>
              </Router>
          </div>
      </AuthContext.Provider>

  );
}