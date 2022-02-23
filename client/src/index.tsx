import React from 'react';
import ReactDOM from 'react-dom';
import {
  CssBaseline, ThemeProvider, Theme, StyledEngineProvider,
} from '@mui/material';
import App from './App';
import theme from './styles/theme';
import './index.css';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
