import React, { useState } from 'react';
import { useForm, SubmitHandler, RegisterOptions } from 'react-hook-form';
import { makeStyles, Drawer, Button } from '@material-ui/core';
import { CreateBarnType } from 'src/utils/types';
import { createANewBarn } from 'src/utils/api/barns';
import { barnHooks } from 'src/utils/hooks/barnHooks';
import { useBarnsContext } from 'src/hooks/useBarnsContext';
import { NUMBER_REGEX, validatePositiveNumber } from 'src/utils/constants';
import ControlledInput from './ControlledInput';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40vw',
    maxWidth: '28rem',
    minWidth: '20rem',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
  input: {
    width: '100%',
  },
}));

interface CreateBarnDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CreateBarnDrawer = ({ open, onClose }: CreateBarnDrawerProps): JSX.Element => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const { validateNewBarnNumber, findNextBarnNumber } = barnHooks();
  const { updateBarnsContext } = useBarnsContext();
  const { control, handleSubmit } = useForm<CreateBarnType>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });

  const barnNumberRules: RegisterOptions = {
    required: 'Es necesario asignarle un número al galpon',
    validate: validateNewBarnNumber,
    pattern: {
      value: NUMBER_REGEX,
      message: 'Solo es valido usar números',
    },
  };

  const maxCapacityRules: RegisterOptions = {
    required: 'Es necesario asignar la capacidad maxima de gallinas al galpon',
    validate: validatePositiveNumber,
    pattern: {
      value: NUMBER_REGEX,
      message: 'Solo es valido usar números',
    },
  };

  const chickensInItRules: RegisterOptions = {
    required: 'Especifica la cantidad de gallinas que hay en el galpon',
    validate: validatePositiveNumber,
    pattern: {
      value: NUMBER_REGEX,
      message: 'Solo es valido usar números',
    },
  };

  const onSubmit: SubmitHandler<CreateBarnType> = async (barnToCreate) => {
    try {
      setIsLoading(true);
      const barnCreated = await createANewBarn(barnToCreate);
      updateBarnsContext((prev) => ({
        ...prev,
        barns: [
          ...prev.barns,
          barnCreated,
        ],
      }));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          name="barnNumber"
          control={control}
          externalClass={classes.input}
          defaultValue={findNextBarnNumber()}
          label="Número del galpon"
          rules={barnNumberRules}
          type="number"
          variant="outlined"
          defaultErrorMessage="Ya existe un galpon con ese número"
        />
        <ControlledInput
          name="maxCapacity"
          control={control}
          externalClass={classes.input}
          label="Capacidad maxima del galpon"
          rules={maxCapacityRules}
          type="number"
          variant="outlined"
          defaultErrorMessage="Solo es aceptado números positivos y sin caracteres distintos a números"
        />
        <ControlledInput
          name="chickensInIt"
          control={control}
          externalClass={classes.input}
          label="Gallinas en el galpon"
          rules={chickensInItRules}
          type="number"
          variant="outlined"
          defaultErrorMessage="Solo es aceptado números positivos y sin caracteres distintos a números"
        />
        <Button type="submit" disabled={isLoading} variant="contained" color="secondary">
          Crear nuevo galpon
        </Button>
      </form>
    </Drawer>
  );
};

export default CreateBarnDrawer;
