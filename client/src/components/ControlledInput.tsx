import React from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { TextField } from '@material-ui/core';

interface CustomInputProps {
  name: string,
  control: Control<any>,
  defaultValue?: string | number,
  rules?: RegisterOptions,
  label?: string,
  variant?: 'standard' | 'filled' | 'outlined',
  type?: string,
  helperText?: string,
  defaultErrorMessage?: string,
  externalClass?: string,
  disabled?: boolean,
}

const ControlledInput = ({
  name,
  control,
  defaultValue = '',
  rules,
  label,
  variant = 'standard',
  type,
  helperText,
  defaultErrorMessage,
  externalClass,
  disabled,
}: CustomInputProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    rules={rules}
    render={({
      field,
      fieldState: { error },
    }) => (
      <TextField
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        label={label}
        variant={variant}
        type={type}
        className={externalClass}
        error={Boolean(error?.type)}
        helperText={error ? (error?.message || defaultErrorMessage) : helperText}
        disabled={disabled}
      />
    )}
  />
);

export default ControlledInput;
