import { RegisterOptions } from 'react-hook-form';
import { NUMBER_REGEX, validatePositiveNumber } from '../constants';

interface NumberInputRulesParams {
  validateFunctions?: Record<string, (value: string | number) => boolean>,
  requiredMessage?: string,
}

export const getPercentageOfOcupation = (maximumCapacity: number, usage: number, decimals = 2) => (
  ((usage / maximumCapacity) * 100).toFixed(decimals)
);

export const getNumberInputRules = ({
  validateFunctions,
  requiredMessage,
}: NumberInputRulesParams): RegisterOptions => ({
  required: requiredMessage,
  validate: {
    ...validateFunctions,
    positiveNumber: validatePositiveNumber,
  },
  pattern: {
    value: NUMBER_REGEX,
    message: 'Solo es valido usar números',
  },
});
