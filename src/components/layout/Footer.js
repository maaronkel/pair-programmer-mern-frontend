import React, { Fragment, useContext } from 'react';
import FooterMain from '../FooterMain';
import AuthContext from '../../context/auth/authContext';

const Footer = () => {

  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <Fragment>
      { isAuthenticated ? ( null ) : ( <FooterMain /> ) }
    </Fragment>
  )
}

export default Footer;