import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  return (
    <div>
      Page Not Found <Link to="/"> Go Home </Link>
    </div>
  );
};

export default NotFound;