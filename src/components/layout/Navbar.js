import React, { Fragment, useContext } from 'react';
import HeaderUnauthenticated from '../HeaderUnauthenticated';
import HeaderAuthenticated from '../HeaderAuthenticated';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {

  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <Fragment>
      {/* <HeaderUnauthenticated /> */}
      {/* <HeaderAuthenticated /> */}
        { isAuthenticated ? (<HeaderAuthenticated />) : (<HeaderUnauthenticated />) }
    </Fragment>
  )
}

export default Navbar;