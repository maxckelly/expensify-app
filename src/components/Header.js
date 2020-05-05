import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { startLogout } from './../actions/auth';

// Styles
import './../styles/base/_base.scss';

export const Header = ({startLogOut}) => (
  <header className="header">  
    <div className = "content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard"> <h1>Expensify App</h1> </Link>
        <button className="button button--link" onClick={startLogOut}> Logout </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);