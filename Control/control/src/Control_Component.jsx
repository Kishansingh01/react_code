
import React, { useState } from 'react';
// import './Control_Component.css';

export default function App() {
  let [uname, setUname] = useState('');
  let [Password, setPassword] = useState('');

  let handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from refreshing
    console.log("Username: ", uname, "Password: ", Password);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="text-start my-3">
                <label className='text-red-600'>Username</label>
                <input
                  type="text"
                  onChange={(event) => setUname(event.target.value)}
                  value={uname}
                  className="form-control"
                />
              </div>

              <div className="text-start my-3 .text-danger">
                <label>Password</label>
                <input
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={Password}
                  className="form-control"
                />
              </div>

              <div className="text-start my-3">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

