import React from 'react';
import {
  styled,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import ControlledInput from 'src/components/ControlledInput';

interface FormData {
  barnNumber: number,
  dateOfTake: Date,
  eggs: number,
}

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
}));

const NewRecord = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    alert(data.barnNumber);
  });

  return (
    <Form onSubmit={onSubmit}>
      <ControlledInput
        control={control}
        name="barnNumber"
        type="number"
        helperText="Ingresa el galpon donde se recogieron"
        label="Galpon de recogida"
      />
      <button type="submit">
        Enviar
      </button>
    </Form>
  );
};

export default NewRecord;
