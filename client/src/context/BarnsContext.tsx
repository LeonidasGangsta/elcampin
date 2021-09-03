import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllBarns } from 'src/utils/api/barns';
import { BarnsType } from 'src/utils/types';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

interface BarnContextInterface {
  isDefault: boolean,
  isLoading: boolean,
  barns: BarnsType[],
  updateBarnsContext: React.Dispatch<React.SetStateAction<BarnContextInterface>>,
}

const initialStateContext: BarnContextInterface = {
  isDefault: true,
  isLoading: true,
  barns: [],
  updateBarnsContext: () => {},
};

export const BarnsContext = createContext(initialStateContext);

export const BarnsContextProvider: React.FC = ({ children }) => {
  const [contextValue, setContextValue] = useState<BarnContextInterface>(initialStateContext);
  const classes = useStyles();
  const history = useHistory();

  const fetchBarns = async () => {
    try {
      const response = await getAllBarns();
      setContextValue({
        barns: response,
        isDefault: false,
        isLoading: false,
        updateBarnsContext: setContextValue,
      });
    } catch (error) {
      setContextValue({
        ...initialStateContext,
        isLoading: false,
        updateBarnsContext: setContextValue,
      });
    }
  };

  useEffect(() => {
    history.push('/');
    fetchBarns();
  }, []);

  return (
    <BarnsContext.Provider value={contextValue}>
      {contextValue.isLoading ? (
        <Backdrop className={classes.backdrop} open={contextValue.isLoading}>
          <CircularProgress />
        </Backdrop>
      ) : children}
    </BarnsContext.Provider>
  );
};
