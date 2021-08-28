import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import theme from 'src/styles/theme';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { AssessmentRounded, HeightRounded } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

type BarnCardProps = {
  barnNumber: number;
  chickensInIt: number;
  maxCapacity: number;
};

const BarnCard: React.FC<BarnCardProps> = ({
  barnNumber,
  chickensInIt,
  maxCapacity,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/assets/chickens.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`Galpon #${barnNumber}`}
          </Typography>
          <List className={classes.list}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <HeightRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Maxima capacidad de gallinas" secondary={`${maxCapacity} gallinas.`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AssessmentRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Gallinas en el galpon" secondary={`${chickensInIt} gallinas`} />
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Editar galpon
        </Button>
      </CardActions>
    </Card>
  );
};

export default BarnCard;
