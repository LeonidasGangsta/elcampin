import useBarnsContext from 'src/hooks/useBarnsContext';

const barnHooks = () => {
  const { barns } = useBarnsContext();

  const validateNewBarnNumber = (barnNumberToSearch: number | string) => {
    const barnNumberInNumber = Number(barnNumberToSearch);
    if (!Number.isNaN(barnNumberInNumber)) {
      const barnFinded = barns.find(({ barnNumber }) => barnNumberInNumber === barnNumber);
      return !barnFinded && barnNumberInNumber > 0;
    }
    return false;
  };

  const findNextBarnNumber = () => (
    barns.reduce((acc, curr) => (curr.barnNumber > acc ? curr.barnNumber : acc), 0) + 1
  );

  return {
    validateNewBarnNumber,
    findNextBarnNumber,
  };
};

export default barnHooks;
