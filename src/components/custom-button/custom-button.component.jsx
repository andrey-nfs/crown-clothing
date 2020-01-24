import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => (
  <button className={`custom-button${isGoogleSignin ? ' google-sign-in' : ''}`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;
