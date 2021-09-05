import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllBarns } from 'src/utils/api/barns';
import { BarnsType } from 'src/utils/types';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import { getAllLogs } from 'src/utils/api/logs';

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
  logs: any[],
  updateBarnsContext: (partialContext: Partial<BarnContextInterface>) => void,
}

const initialStateContext: BarnContextInterface = {
  isDefault: true,
  isLoading: true,
  barns: [],
  logs: [],
  updateBarnsContext: () => {},
};

export const BarnsContext = createContext(initialStateContext);

export const BarnsContextProvider: React.FC = ({ children }) => {
  const [contextValue, setContextValue] = useState<BarnContextInterface>(initialStateContext);
  const handleUpdateContext = (partialContext: Partial<BarnContextInterface>) => (
    setContextValue((prev) => ({
      ...prev,
      partialContext,
    }))
  );
  const classes = useStyles();
  const history = useHistory();

  const fetchBarns = async () => {
    try {
      const barnsResponse = await getAllBarns();
      const logsResponse = await getAllLogs();

      setContextValue({
        barns: barnsResponse,
        logs: logsResponse,
        isDefault: false,
        isLoading: false,
        updateBarnsContext: handleUpdateContext,
      });
    } catch (error) {
      setContextValue({
        ...initialStateContext,
        isLoading: false,
        updateBarnsContext: handleUpdateContext,
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
