import React from 'react';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavigationBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const handleLinkToHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    logout();
  };

  const handleLogIn = () => {
    loginWithRedirect();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleLinkToHome}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            size="large"
          >
            <Home />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Finca El Campin
          </Typography>
          <Button color="inherit" onClick={isAuthenticated ? handleLogout : handleLogIn}>
            {isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión'}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
