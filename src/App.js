import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GymSite } from './components/partner/GymSite';
import { Calendars } from "./components/partner/Calendar";
import { Header } from "./components/main/Header";
import { LeftMenu } from "./components/main/LeftMenu";
import { Gyms } from "./components/categories/Gyms";
import { Fitness } from "./components/categories/Fitness";
import { PersonalTrainers } from "./components/categories/PersonalTrainers";
import { UserSlots } from './components/user/UserSlots';
import { UserProfile } from './components/user/UserProfile';
import { Activation } from './components/main/Activation';
import { Login } from "./components/main/Login";
import { Register } from "./components/main/Register";
import { RegisterInfo } from "./components/forms/RegisterInfo";
import { PrivateRoute } from "./actions/PrivateRoute";
import { LoginViaGoogleActivation } from "./components/main/LoginViaGoogleActivation";
import { BookingInfo } from "./components/forms/BookingInfo";
import { PartnerProfile } from "./components/partner/settings/PartnerProfile";
import { UserNavbar } from "./components/main/UserNavbar";

import './index.css';

export const App = () => {

    const isLoggedIn = localStorage.getItem('Authorization') ? true : false;

    return (
          <div className='router'>
              <Router>
                  <div className='main-menu'>
                      <LeftMenu />
                  </div>
                  <div className='header'>
                      {isLoggedIn ? <UserNavbar /> : <Header />}
                  </div>
                  <div className='content'>
                      <Switch>
                          <Route exact path={'/verify'} component={ Activation } />
                          <Route exact path={'/login'} component={ Login } />
                          <Route exact path={'/google'} component={ LoginViaGoogleActivation } />
                          <Route exact path={'/register'} component={ Register } />
                          <Route exact path={'/info'} component={ RegisterInfo } />
                          <Route exact path={'/booked'} component={ BookingInfo } />
                          <Route exact path={'/gymsite/:id'} component={ GymSite } />
                          <Route exact path={'/calendar/:id'} component={ Calendars } />
                          <PrivateRoute exact path={'/user-slots'} component={ UserSlots } />
                          <PrivateRoute exact path={'/profile'} component={ UserProfile } />
                          {/*<PrivateRoute exact path={'/partner-slots'} component={ PartnerProfile } />*/}
                          <PrivateRoute exact path={'/partner-profile'} component={ PartnerProfile } />
                      </Switch>
                      <div className='categories'>
                          <Route exact path={'/'} component={ Gyms } />
                          <Route exact path={'/gyms'} component={ Gyms } />
                          <Route exact path={'/fitness'} component={ Fitness } />
                          <Route exact path={'/personal-trainers'} component={ PersonalTrainers } />
                      </div>
                  </div>
              </Router>
          </div>
  );
}