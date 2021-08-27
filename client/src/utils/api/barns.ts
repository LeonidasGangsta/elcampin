import { BarnsType } from '../types';
import { httpHelper } from './httpHelper';

export const getAllBarns = async () => {
  try {
    const { data } = await httpHelper.get('/barns');
    const barns: BarnsType[] = [...data];
    barns.sort((aBarn, bBarn) => aBarn.barnNumber - bBarn.barnNumber);
    return barns;
  } catch (error) {
    return [];
  }
};
