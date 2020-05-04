import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { startLogout } from './../actions/auth';

// Styles
import './../styles/base/_base.scss';

export const Header = ({startLogOut}) => (
  <header>
    <h1>Expensify App</h1>
    <NavLink to="/dashboard" activeClassName="is-active"> Dashboard </NavLink>
    <NavLink to="/create" activeClassName="is-active"> Add Expense </NavLink>
    <button onClick={startLogOut}> Logout </button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);