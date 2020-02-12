import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './../styles/base/_base.scss';
const Header = () => (
  <header>
    <h1> Expensify App </h1>
    <NavLink to="/" activeClassName="is-active" exact={true} > Home </NavLink>
    <NavLink to="/create" activeClassName="is-active"> Add Expense </NavLink>
    <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
  </header>
);


export default Header;