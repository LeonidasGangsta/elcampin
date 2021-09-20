import React from 'react';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import { Home } from '@mui/icons-material';

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

const NavigationBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleLinkToHome = () => {
    history.push('/');
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
          {/* <Button component={RouterLink} to="/test" color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
