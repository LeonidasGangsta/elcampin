import { CircularProgress, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BarnCard from 'src/components/BarnCard';
import { getAllBarns } from 'src/utils/api/barns';
import { BarnsType } from '../utils/types';

const Home = () => {
  const [barns, setBarns] = useState<BarnsType[]>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchBarns = async () => {
    const response = await getAllBarns();
    setBarns(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBarns();
  }, []);

  return (
    <Container fixed>
      {isLoading ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          {barns?.map((barn) => (
            <BarnCard
              key={barn.id}
              id={barn.barnNumber}
              chickensInIt={barn.chickensInIt}
              maxCapacity={barn.maxCapacity}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default Home;
