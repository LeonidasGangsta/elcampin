import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Skeleton } from '@mui/material';

const useStyles = makeStyles({
  barnCard: {
    margin: '1rem',
  },
});

function SkeletonsCards() {
  const classes = useStyles();

  return (
    <>
      <Skeleton variant="rectangular" height={418.4} width={338.5} className={classes.barnCard} />
      <Skeleton variant="rectangular" height={418.4} width={338.5} className={classes.barnCard} />
      <Skeleton variant="rectangular" height={418.4} width={338.5} className={classes.barnCard} />
    </>
  );
}

export default SkeletonsCards;
