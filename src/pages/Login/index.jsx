import React from 'react';

import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="container login">
        <button
          className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
          type="submit"
        >
          Sign in with Google&nbsp;
          <i className="fa fa-google" />
        </button>
      </div>
    );
  }
}

export default Login;
