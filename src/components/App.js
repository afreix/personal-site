import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Header from './Header/Header';

const App = (props) => {
  return (
    <div>
      <Header>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/fuel-savings">Demo App</Link>
        {' | '}
        <Link to="/about">About Andrew</Link>
      </Header>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
