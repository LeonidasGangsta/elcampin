import React, { useEffect } from 'react';
import { httpHelper } from '../utils/httpHelper';

const Home = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    httpHelper.get('/barns').then(console.log);
  }, []);

  return (
    <div className="home">
      <p>
        This is an example.
      </p>
    </div>
  );
};

export default Home;
