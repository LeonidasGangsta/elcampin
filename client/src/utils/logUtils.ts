import { RegisterOptions } from 'react-hook-form';
import { isAPastDate } from './dateUtils';
import { BarnsType } from './types';

export const getSelectBarnRules = (barns: BarnsType[]): RegisterOptions => ({
  required: 'Por favor ingresa el número de un galpon',
  validate: (barnID: string | number) => Boolean(barns.find((barn) => barn.id === Number(barnID))),
});

export const rulesForTakesDate: RegisterOptions = {
  required: 'Asegurate de especificar en que fecha se hizo la recolección de los huevos',
  validate: (date: string) => isAPastDate(date),
};

export const eggsFromTakeRules: RegisterOptions = {
  required: 'Por favor indica cuantos huevos se recogieron',
  validate: (eggs: number | string) => Number(eggs) >= 0
    && Math.floor(Number(eggs)) === Number(eggs),
};
