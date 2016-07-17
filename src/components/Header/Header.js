import React, { PropTypes } from 'react';
import './header.css';

// Since this component is simple and static, there's no parent container for it.
class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
        <h1 className="headerText"> I am a header </h1>
        {this.props.children}
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Header;
