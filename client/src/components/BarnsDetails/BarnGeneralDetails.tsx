import React from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useBarnsContext from 'src/hooks/useBarnsContext';
import { getPercentageOfOccupation } from 'src/utils/barnUtils';
import { getBarnDateInSpanish } from 'src/utils/dateUtils';
import { BarnsType } from 'src/utils/types';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

type BarnGeneralDetailsProps = {
  id: number,
};

function BarnGeneralDetails({ id }: BarnGeneralDetailsProps): JSX.Element {
  const classes = useStyles();
  const { barns } = useBarnsContext();
  const {
    maxCapacity,
    chickensInIt,
    barnNumber,
    createdAt,
    updatedAt,
  } = barns.find((barn) => barn.id === id) as BarnsType;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            {`Galpon #${barnNumber}`}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {`Creado el ${getBarnDateInSpanish(createdAt)}`}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {`Modificado por última vez el ${getBarnDateInSpanish(updatedAt)}`}
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            {`Maxima capacidad: ${maxCapacity} gallinas`}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {`Espacio ocupado: ${chickensInIt} gallinas`}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {`Porcentaje de ocupacion: ${getPercentageOfOccupation(maxCapacity, chickensInIt, 1)} %`}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default BarnGeneralDetails;
