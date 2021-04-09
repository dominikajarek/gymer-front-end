import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GymSite } from './components/partner/GymSite';
import { Calendars } from "./components/partner/Calendar";
import { Header } from "./components/main/Header";
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
import { Home } from "./components/main/Home";
import { Footer } from "./components/main/Footer";
import { ManageEmployees } from "./components/partner/settings/ManageEmployees";
import { UpdateEmployeeById } from "./components/partner/settings/UpdateEmployeeById";
import { Add } from "./components/partner/settings/Add";

import './index.css';
import './styles/book-form.css';
import './styles/buttons.css';
import './styles/calendar.css';
import './styles/gyms-card.css';
import './styles/gym-site.css';
import './styles/header.css';
import './styles/login-register.css';
import './styles/navigation.css';
import './styles/user-details-site.css';

export const App = () => {

    const isLoggedIn = !!localStorage.getItem('Authorization');

    return (
          <div className='router'>
              <Router>
                  <div className='header'>
                      {isLoggedIn ? <UserNavbar /> : <Header />}
                  </div>
                  <div className='content'>
                      <Switch>
                          <Route exact path={'/'} component={ Home } />
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
                          <PrivateRoute exact path={'/employees'} component={ ManageEmployees } />
                          <PrivateRoute exact path={'/employees/:id'} component={ UpdateEmployeeById } />
                          <PrivateRoute exact path={'/partner-profile'} component={ PartnerProfile } />
                          <PrivateRoute exact path={'/add-employee'} component={ Add } />
                      </Switch>
                  </div>
                  <div className='footer'>
                    <Footer />
                  </div>
              </Router>
          </div>
  );
}