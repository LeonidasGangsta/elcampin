import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import BarnCard from 'src/components/BarnCard';
import { useBarnsContext } from 'src/hooks/useBarnsContext';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barnCard: {
    margin: '1rem',
  },
});

const Home = () => {
  const classes = useStyles();
  const { isLoading, barns, isDefault } = useBarnsContext();

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
        <>
          {barns.map((barn) => (
            <div key={barn.id} className={classes.barnCard}>
              <BarnCard barn={barn} />
            </div>
          ))}
        </>
      )}
    </Container>
  );
};

export default Home;
