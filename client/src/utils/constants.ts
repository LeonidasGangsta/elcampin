export const NUMBER_REGEX = /^[0-9]+$/;

export const validatePositiveNumber = (value: number | string) => {
  const number = Number(value);
  const isANumber = !Number.isNaN(number);
  const isPositive = number >= 0;
  return isANumber && isPositive;
};
