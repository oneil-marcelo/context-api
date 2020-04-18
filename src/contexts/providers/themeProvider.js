import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

import * as themes from '../../themes';

export const ThemeContext = createContext();

const ThemesProvider = ({children}) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemesProvider;
