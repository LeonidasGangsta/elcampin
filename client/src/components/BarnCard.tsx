import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import theme from 'src/styles/theme';
import {
  Avatar, List, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material';
import { AssessmentRounded, HeightRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { BarnsType } from 'src/utils/types';
import BarnDrawer from './BarnDrawer';

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

function BarnCard({ barn }: BarnCardProps) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isShowingDrawer, setIsShowingDrawer] = useState(false);

  const handleEditBarn = () => {
    setIsShowingDrawer(true);
  };

  const handleCloseDrawer = () => {
    setIsShowingDrawer(false);
  };

  const handleOpenBarnDetails = () => {
    navigate(`galpon/${barn.id}`);
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
        <Button size="small" color="primary" onClick={handleEditBarn}>
          Editar galpon
        </Button>
        <BarnDrawer open={isShowingDrawer} onClose={handleCloseDrawer} barnToEdit={barn} />
      </CardActions>
    </Card>
  );
}

export default BarnCard;
