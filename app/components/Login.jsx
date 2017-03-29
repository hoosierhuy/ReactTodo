import React, { Component } from 'react';
import * as Redux from 'react-redux';

import * as actions from '../actions/actions';

class Login extends Component {

  constructor (props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    const {dispatch} = this.props;

    dispatch(actions.startLogin());
  }

  render() {
    return (
      <section>
        <h1 className="page-title">React Redux Todo App</h1>

        <article className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Log In</h3>
              <p>Log in with GitHub account below.</p>
              <button className="button" onClick={this.onLogin}>Login With GitHub</button>
            </div>
          </div>
        </article>
      </section>
    )
  }

}

export default Redux.connect()(Login);
