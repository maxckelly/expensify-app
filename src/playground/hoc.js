// Higher Order Component (HOC) - A component that renders another component.
// The goal of HOC is to reuse code, render hijacking, prop manipulation, abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1> Info </h1>
    <p> The info is: {props.info}</p>
  </div>
);

const Authentication = (props) => (
  <div>
    <h1> Hello there! This is LOL </h1>
  </div>
);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p> Please login to view this page. </p>
      )} 
    </div>
  )
}

// The below is the higher order component
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p> This is private info please don't share. </p>}
      {/* The ...props bases the props down to the child. If we don't have this we won't see props.info */}
      <WrappedComponent {...props} />
    </div>
  )
};



const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Authentication);

// If you change the below to false the message will disappear or appear.
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the detail" />, document.getElementById('app'));