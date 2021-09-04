import React, { useState } from 'react';
import { Button, Container, makeStyles } from '@material-ui/core';
import BarnCard from 'src/components/BarnCard';
import { useBarnsContext } from 'src/hooks/useBarnsContext';
import { Skeleton } from '@material-ui/lab';
import BarnDrawer from 'src/components/BarnDrawer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem 0 4rem',
  },
  barnContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0',
  },
  barnCard: {
    margin: '1rem',
  },
  button: {
    padding: '0.5rem 0.25rem',
    fontWeight: 600,
    width: '50%',
  },
});

const Home = () => {
  const classes = useStyles();
  const { isLoading, barns, isDefault } = useBarnsContext();
  const [showingBarnForm, setShowingBarnForm] = useState(false);

  const handleCreateNewBarn = () => {
    setShowingBarnForm(true);
  };

  const onCloseShowingBarnForm = () => {
    setShowingBarnForm(false);
  };

  const SkeletonsCards: React.FC = () => (
    <>
      <Skeleton variant="rect" height={418.4} width={338.5} className={classes.barnCard} />
      <Skeleton variant="rect" height={418.4} width={338.5} className={classes.barnCard} />
      <Skeleton variant="rect" height={418.4} width={338.5} className={classes.barnCard} />
    </>
  );

  return (
    <Container className={classes.root}>
      {isLoading || isDefault ? (
        <SkeletonsCards />
      ) : (
        <div className={classes.barnContainer}>
          {barns.map((barn) => (
            <div key={barn.id} className={classes.barnCard}>
              <BarnCard barn={barn} />
            </div>
          ))}
        </div>
      )}
      <Button
        variant="outlined"
        color="secondary"
        className={classes.button}
        onClick={handleCreateNewBarn}
      >
        Crear un nuevo galpon
      </Button>
      <BarnDrawer open={showingBarnForm} onClose={onCloseShowingBarnForm} />
    </Container>
  );
};

export default Home;
