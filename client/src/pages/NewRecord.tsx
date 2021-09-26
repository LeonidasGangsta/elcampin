import React from 'react';
import {
  styled,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import ControlledInput from 'src/components/ControlledInput';
import { createNewLog } from 'src/utils/api/logs';
import { CreateLogType } from 'src/utils/types';
import { useBarnsContext } from 'src/hooks/useBarnsContext';
import { useHistory } from 'react-router-dom';

interface FormData {
  barnNumber: string,
  dateOfTake: string,
  eggs: string,
}

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  margin: theme.spacing(4),
}));

const Input = styled(ControlledInput)(({ theme }) => ({
  margin: theme.spacing(2),
  border: '1px solid blue',
}));

const NewRecord = () => {
  const { handleSubmit, control } = useForm<FormData>();
  const { barns, refreshState } = useBarnsContext();
  const history = useHistory();

  const initialDate: string = (() => {
    const date = new Date();
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  })();

  const onSubmit = handleSubmit(async (data) => {
    const barnRelated = barns.find((barn) => barn.barnNumber === Number(data.barnNumber));
    if (!barnRelated) {
      alert('No se encontro un galpon con ese número');
      return null;
    }
    const newLog: CreateLogType = {
      barnID: barnRelated.id,
      chickensInIt: barnRelated.chickensInIt,
      date: data.dateOfTake,
      eggs: Number(data.eggs),
    };

    try {
      const logCreated = await createNewLog(newLog);
      history.push('/');
      return logCreated;
    } catch (error) {
      return null;
    } finally {
      refreshState();
    }
  });

  return (
    <Form onSubmit={onSubmit}>
      <Input
        control={control}
        name="barnNumber"
        type="number"
        helperText="Ingresa el galpon donde se recogieron"
        label="Galpon de recogida"
        variant="outlined"
      />
      <Input
        control={control}
        name="dateOfTake"
        type="date"
        helperText="¿En que fecha se hizó la recogida?"
        label="Fecha de recolección"
        variant="outlined"
        defaultValue={initialDate}
        disabled
      />
      <Input
        control={control}
        name="eggs"
        type="number"
        helperText="¿Cuantos huevos se recogieron?"
        label="Huevos recogidos"
        variant="outlined"
      />
      <button type="submit">
        Enviar
      </button>
    </Form>
  );
};

export default NewRecord;
