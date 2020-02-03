import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignin, inverted, ...otherProps }) => (
  <button className={`custom-button${inverted ? ' inverted' : ''}${isGoogleSignin ? ' google-sign-in' : ''}`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;
