import { CircularProgress, Container, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BarnCard from 'src/components/BarnCard';
import { getAllBarns } from 'src/utils/api/barns';
import { BarnsType } from '../utils/types';

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
  const [barns, setBarns] = useState<BarnsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  const fetchBarns = async () => {
    const response = await getAllBarns();
    setBarns(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBarns();
  }, []);

  return (
    <Container className={classes.root}>
      {isLoading || !barns.length ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          {barns.map((barn) => (
            <div className={classes.barnCard}>
              <BarnCard
                barnNumber={barn.barnNumber}
                chickensInIt={barn.chickensInIt}
                maxCapacity={barn.maxCapacity}
              />
            </div>
          ))}
        </>
      )}
    </Container>
  );
};

export default Home;
