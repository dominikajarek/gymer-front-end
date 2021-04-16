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
                         onChange={({target}) => props.setFirstName(target.value)}
                  />
              </p>
              <p className='register-input-field'>
                  <label htmlFor="password" className="floatLabel formLabel">Last name</label>
                  <input id="password"
                         name="password"
                         type="text"
                         className='input-type-text'
                         value={props.lastName}
                         onChange={({target}) => props.setLastName(target.value)}
                  />
              </p>
              <p className='register-input-field'>
                  <label htmlFor="confirmPassword" className="floatLabel formLabel">Description</label>
                  <input id="confirmPassword"
                         name="confirmPassword"
                         type="text"
                         className='input-type-text'
                         value={props.description}
                         onChange={({target}) => props.setDescription(target.value)}
                  />
              </p>
              <p className='register-input-field'>
                  <label htmlFor="confirmPassword" className="floatLabel formLabel">Image</label>
                  <input id="confirmPassword"
                         name="confirmPassword"
                         type="text"
                         className='input-type-text'
                         value={props.image}
                         onChange={({target}) => props.setImage(target.value)}
                  />
              </p>
              <p className='register-input-field'>
                  <button className="button-submit" onClick={props.onChange}>Save</button>
              </p>
              <button>Delete employee</button>
          </form>
      </div>
  );
};