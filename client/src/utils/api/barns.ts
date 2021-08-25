import { BarnsType } from '../types';
import { httpHelper } from './httpHelper';

export const getAllBarns = async () => {
  try {
    const { data } = await httpHelper.get('/barns');
    return data as BarnsType[];
  } catch (error) {
    return [];
  }
};
