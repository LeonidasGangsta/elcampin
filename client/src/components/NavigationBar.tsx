import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
import { Home } from '@material-ui/icons';

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
          <IconButton edge="start" onClick={handleLinkToHome} className={classes.menuButton} color="inherit" aria-label="menu">
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
