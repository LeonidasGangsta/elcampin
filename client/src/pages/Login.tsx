import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { styled } from '@mui/styles';
import { Button, CircularProgress } from '@mui/material';
import { LoginRounded } from '@mui/icons-material';

const LogInContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const LogInHeader = styled('h1')(({ theme }) => ({
  color: theme.palette.primary.main,
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(1),
}));

const LogInDescription = styled('p')(({ theme }) => ({
  color: theme.palette.text.primary,
  marginTop: theme.spacing(1),
}));

function Login() {
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }

  return (
    <LogInContainer>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <LogInHeader>
            Debes iniciar sesión 👋
          </LogInHeader>
          <LogInDescription>
            Recuerda que para acceder al Campin, debes ingresar con tu cuenta de correo
            personal.
          </LogInDescription>
          <Button variant="outlined" type="button" onClick={() => loginWithRedirect()}>
            Iniciar sesión
            {' '}
            <LoginRounded />
          </Button>
        </>
      )}
    </LogInContainer>
  );
}

export default Login;
