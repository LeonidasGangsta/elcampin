import { useContext } from 'react';
import { BarnsContext } from 'src/context/BarnsContext';

export const useBarnsContext = () => useContext(BarnsContext);
