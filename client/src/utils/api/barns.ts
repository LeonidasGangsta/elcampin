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
  const barnCreated: BarnsType = data?.barn;
  return barnCreated;
};

export const updateABarn = async (barnId: number | string, params: CreateBarnType) => {
  const response = await httpHelper.patch(`/barns/update/${barnId}`, { barn: params });
  const barnUpdated: BarnsType = response.data;
  return barnUpdated;
};

export const deleteABarn = async (barnId: number | string) => {
  const { data } = await httpHelper.delete(`/barns/delete/${barnId}`);
  const barnDeleted: BarnsType = data?.barnDeleted;
  return barnDeleted;
};
