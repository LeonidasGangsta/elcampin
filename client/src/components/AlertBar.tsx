import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

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
}

const AlertBar: React.FC<AlertBarProps> = ({
  title,
  externalClass = '',
  closeText = 'cerrar',
  severity = 'info',
  color,
  variant,
  onClose,
  children,
}) => {
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
};

export default AlertBar;
