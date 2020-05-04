import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// The : renames the prop
// Rest just means the rest of the props.
export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Redirect to="/dashboard" />
    ) : (
      <Component {...props} />
    )
  )} />
);

// The !! makes it return true or false
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);