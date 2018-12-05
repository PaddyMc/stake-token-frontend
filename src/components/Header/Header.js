import React from 'react';

import './Header.css';

const Header = props => {
  const {
    intro,
    welcomeText
  } = props

  return (
    <div>
      <div className="App-header"><b><u>{intro}</u></b></div>
      <div className="app-text header-small-text">{welcomeText}</div>
      <hr />
    </div>
  );
}
export default Header;