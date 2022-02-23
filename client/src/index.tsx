import React from 'react';
import ReactDOM from 'react-dom';
import {
  CssBaseline, ThemeProvider, Theme, StyledEngineProvider,
} from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import theme from './styles/theme';
import './index.css';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root'),
);
