import React from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { Alert, AlertTitle } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface AlertBarProps {
  title?: string,
  externalClass?: string,
  closeText?: string,
  color?: 'error' | 'info' | 'success' | 'warning',
  severity?: 'error' | 'info' | 'success' | 'warning',
  variant?: 'filled' | 'outlined' | 'standard',
  onClose?: () => void,
  children: React.ReactNode,
}

function AlertBar({
  title,
  externalClass = '',
  closeText = 'cerrar',
  severity = 'info',
  color,
  variant,
  onClose,
  children,
}: AlertBarProps) {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${externalClass}`}>
      <Alert
        severity={severity}
        closeText={closeText}
        onClose={onClose}
        color={color}
        variant={variant}
      >
        {title && (
          <AlertTitle>{title}</AlertTitle>
        )}
        {children}
      </Alert>
    </div>
  );
}

export default AlertBar;
