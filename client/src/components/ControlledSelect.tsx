import React from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import {
  FormControl, Select, InputLabel, FormHelperText,
} from '@mui/material';

interface CustomInputProps {
  name: string,
  control: Control<any>,
  defaultValue?: string | number,
  rules?: RegisterOptions,
  label?: string,
  variant?: 'standard' | 'filled' | 'outlined',
  helperText?: string,
  defaultErrorMessage?: string,
  className?: string,
  disabled?: boolean,
  children?: React.ReactNode,
}

function ControlledSelect({
  name,
  control,
  defaultValue = '',
  rules,
  label,
  variant = 'standard',
  helperText,
  defaultErrorMessage,
  className,
  disabled,
  children,
}: CustomInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({
        field,
        fieldState: { error },
      }) => (
        <FormControl className={className}>
          <InputLabel id={`${label}-${name}`}>{label}</InputLabel>
          <Select
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            labelId={`${label}-${name}`}
            label={label}
            error={Boolean(error)}
            disabled={disabled}
            variant={variant}
          >
            {children}
          </Select>
          {error && (
            <FormHelperText>
              {error
                ? (error?.message || defaultErrorMessage)
                : helperText}

            </FormHelperText>

          )}
        </FormControl>
      )}
    />
  );
}

export default ControlledSelect;
