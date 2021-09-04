import { BarnsType, CreateBarnType } from '../types';
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

export const createANewBarn = async (params: CreateBarnType) => {
  const { data } = await httpHelper.post('/barns/create', { barn: params });
  const barnCreated = data?.barn;
  return barnCreated;
};
