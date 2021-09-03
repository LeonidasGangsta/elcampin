import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useBarnsContext } from 'src/hooks/useBarnsContext';
import { getDateInSpanish, getPercentageOfOcupation } from 'src/utils/barnUtils/barnUtils';
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

const BarnGeneralDetails = ({ id }: BarnGeneralDetailsProps): JSX.Element => {
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
            {`Creado el ${getDateInSpanish(createdAt)}`}
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {`Modificado por última vez el ${getDateInSpanish(updatedAt)}`}
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
            {`Porcentaje de ocupacion: ${getPercentageOfOcupation(maxCapacity, chickensInIt, 1)} %`}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default BarnGeneralDetails;
