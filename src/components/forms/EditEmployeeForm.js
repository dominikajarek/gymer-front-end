import React from 'react';

export const EditEmployeeForm = (props) => {
  return (
      <div className="register">
          <form className='register-form'>
              <p className='register-input-field'>
                  <label htmlFor="email" className="floatLabel formLabel">First name</label>
                  <input id="email"
                         name="email"
                         type="text"
                         className='input-type-text'
                         value={props.firstName}
                  />
              </p>
              <p className='register-input-field'>
                  <label htmlFor="password" className="floatLabel formLabel">Last name</label>
                  <input id="password"
                         name="password"
                         type="text"
                         className='input-type-text'
                         value={props.lastName}
                  />
              </p>
              <p className='register-input-field'>
                  <label htmlFor="confirmPassword" className="floatLabel formLabel">Description</label>
                  <input id="confirmPassword"
                         name="confirmPassword"
                         type="text"
                         className='input-type-text'
                         value={props.description}
                  />
              </p>
              <p className='register-input-field'>
                  <label htmlFor="confirmPassword" className="floatLabel formLabel">Image</label>
                  <input id="confirmPassword"
                         name="confirmPassword"
                         type="text"
                         className='input-type-text'
                         value={props.image}
                  />
              </p>
              <p className='register-input-field'>
                  <input type="submit" value="Submit" />
              </p>
              <button>Delete employee</button>
          </form>
      </div>
  );
};