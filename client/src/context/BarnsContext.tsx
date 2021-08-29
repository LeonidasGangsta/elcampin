import React, { createContext, useEffect, useState } from 'react';
import { getAllBarns } from 'src/utils/api/barns';
import { BarnsType } from 'src/utils/types';

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
    fetchBarns();
  }, []);

  return (
    <BarnsContext.Provider value={contextValue}>
      {children}
    </BarnsContext.Provider>
  );
};
