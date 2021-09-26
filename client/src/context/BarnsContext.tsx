import React, { createContext, useEffect, useState } from 'react';
import { getAllBarns } from 'src/utils/api/barns';
import { BarnsType } from 'src/utils/types';
import { Backdrop, CircularProgress } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
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
  refreshState: () => void,
}

const initialStateContext: BarnContextInterface = {
  isDefault: true,
  isLoading: true,
  barns: [],
  logs: [],
  updateBarnsContext: () => {},
  refreshState: () => {},
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

  const fetchBarnsAndLogs = async () => {
    try {
      const barnsResponse = await getAllBarns();
      const logsResponse = await getAllLogs();

      setContextValue({
        barns: barnsResponse,
        logs: logsResponse,
        isDefault: false,
        isLoading: false,
        updateBarnsContext: handleUpdateContext,
        refreshState: fetchBarnsAndLogs,
      });
    } catch (error) {
      setContextValue({
        ...initialStateContext,
        isLoading: false,
        updateBarnsContext: handleUpdateContext,
        refreshState: fetchBarnsAndLogs,
      });
    }
  };

  useEffect(() => {
    fetchBarnsAndLogs();
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
