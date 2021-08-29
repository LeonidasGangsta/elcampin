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
import { useHistory } from 'react-router-dom';
import { BarnsType } from 'src/utils/types';

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
  barn: BarnsType,
};

const BarnCard: React.FC<BarnCardProps> = ({ barn }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleOpenBarnDetails = () => {
    history.push(`galpon/${barn.id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleOpenBarnDetails}>
        <CardMedia
          component="img"
          alt="Gallinas en galpon"
          height="140"
          image="/assets/chickens.jpg"
          title="Gallinas en galpon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`Galpon #${barn.barnNumber}`}
          </Typography>
          <List className={classes.list}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <HeightRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Maxima capacidad de gallinas" secondary={`${barn.maxCapacity} gallinas.`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AssessmentRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Gallinas en el galpon" secondary={`${barn.chickensInIt} gallinas`} />
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
