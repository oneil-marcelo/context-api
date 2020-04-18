import React, {useContext} from 'react';
import {ThemeProvider} from 'styled-components';
import PropTypes from 'prop-types';

import {ThemeContext} from './providers/themeProvider';
import UserProvider, {UserContext} from './providers/userProvider';

export const themeContext = ThemeContext;
export const userContext = UserContext;

const ContextsProvider = ({children}) => {
  const {theme} = useContext(ThemeContext);
  const current = theme;
  return (
    <UserProvider>
      <ThemeProvider theme={{current}}>{children}</ThemeProvider>
    </UserProvider>
  );
};

ContextsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextsProvider;
