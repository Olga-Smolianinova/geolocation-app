import React from 'react';
import PlaceIcon from '@material-ui/icons/Place';

import './Logo.css';

const Logo = () => {
  return (
    <div className="Logo">
      <PlaceIcon fontSize="large" style={{ color: '#d22c32' }} />
      <p>Find My IP</p>
    </div>
  );
};

export default Logo;
