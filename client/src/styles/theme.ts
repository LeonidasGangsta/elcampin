import { createTheme, adaptV4Theme } from '@mui/material';

const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: '#fdc500',
    },
    secondary: {
      main: '#00509d',
    },
  },
}));

export default theme;
