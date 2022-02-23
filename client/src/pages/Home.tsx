import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useNavigate } from 'react-router-dom';
import BarnCard from 'src/components/BarnCard';
import { useBarnsContext } from 'src/hooks/useBarnsContext';

import BarnDrawer from 'src/components/BarnDrawer';
import LogsList from 'src/components/LogsList';
import SkeletonsCards from 'src/components/SkeletonCards';

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

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
  const {
    isLoading, barns, logs, isDefault,
  } = useBarnsContext();
  const [showingBarnForm, setShowingBarnForm] = useState(false);

  const handleCreateNewBarn = () => {
    setShowingBarnForm(true);
  };

  const onCloseShowingBarnForm = () => {
    setShowingBarnForm(false);
  };

  const handleCreateNewRecord = () => {
    navigate('/recogida/nueva');
  };

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
      <LogsList logs={logs} />
      <BarnDrawer open={showingBarnForm} onClose={onCloseShowingBarnForm} />
      <Button
        variant="outlined"
        color="secondary"
        className={classes.button}
        onClick={handleCreateNewRecord}
      >
        Nueva recogida de huevos
      </Button>
    </Container>
  );
}

export default Home;
