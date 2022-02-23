import { useContext } from 'react';
import { BarnsContext } from 'src/context/BarnsContext';

const useBarnsContext = () => useContext(BarnsContext);

export default useBarnsContext;
