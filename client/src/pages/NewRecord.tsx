import React from 'react';
import {
  Button as MuiButton,
  MenuItem,
  styled,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import ControlledInput from 'src/components/ControlledInput';
import { createNewLog } from 'src/utils/api/logs';
import { BarnsType, CreateLogType } from 'src/utils/types';
import { useBarnsContext } from 'src/hooks/useBarnsContext';
import { useHistory } from 'react-router-dom';
import ControlledSelect from 'src/components/ControlledSelect';
import { eggsFromTakeRules, getSelectBarnRules, rulesForTakesDate } from 'src/utils/logUtils';

interface FormData {
  barnID: string,
  dateOfTake: string,
  eggs: string,
}

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(4),
}));

const Input = styled(ControlledInput)(({ theme }) => ({
  margin: `${theme.spacing(2)} 0`,
  width: '100%',
  maxWidth: '25rem',
}));

const Select = styled(ControlledSelect)(({ theme }) => ({
  margin: `${theme.spacing(2)} 0`,
  width: '100%',
  maxWidth: '25rem',
}));

const Button = styled(MuiButton)(({ theme }) => ({
  margin: `${theme.spacing(2)} 0`,
  width: '100%',
  maxWidth: '25rem',
  padding: '0.5rem 0.25rem',
  fontWeight: 600,
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
    const barnRelated = barns.find((barn) => barn.id === Number(data.barnID)) as BarnsType;
    const newLog: CreateLogType = {
      barnID: Number(data.barnID),
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
      <Typography>
        Vamos a agregar un nuevo registro de recogida
      </Typography>
      <Select
        control={control}
        name="barnID"
        label="Galpon de recogida"
        variant="outlined"
        rules={getSelectBarnRules(barns)}
      >
        {barns.map((barn) => (
          <MenuItem key={barn.id} value={barn.id}>
            {barn.barnNumber}
          </MenuItem>
        ))}
      </Select>
      <Input
        control={control}
        name="dateOfTake"
        type="date"
        label="Fecha de recolección"
        variant="outlined"
        defaultValue={initialDate}
        defaultErrorMessage="Por favor ingresa una fecha pasada o actual"
        rules={rulesForTakesDate}
      />
      <Input
        control={control}
        name="eggs"
        type="number"
        label="Huevos recogidos"
        variant="outlined"
        defaultErrorMessage="Asegurate de escribir una cantidad positiva y entera de huevos"
        rules={eggsFromTakeRules}
      />
      <Button
        variant="outlined"
        color="secondary"
        type="submit"
      >
        Guardar nuevo registro
      </Button>
    </Form>
  );
};

export default NewRecord;
