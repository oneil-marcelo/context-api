import React from 'react';

import ThemesProvider from './contexts/providers/themeProvider';
import ContextsProvider from './contexts';
import Routes from './components/Routes';
import CustomStatusBar from './components/CustomStatusBar';

const App = () => {
  return (
    <ThemesProvider>
      <ContextsProvider>
        <CustomStatusBar />
        <Routes />
      </ContextsProvider>
    </ThemesProvider>
  );
};

export default App;
