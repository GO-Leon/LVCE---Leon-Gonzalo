import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from './ItemCount';

const onAdd = (totalItem) => {
  alert(`Agregaste ${totalItem} productos`);
};

export default function MultiActionAreaCard({props}) {
  const { title, price, brand, img, stock, id } = props
  return (
    <Card sx={{ maxWidth: 300, minWidth:300, maxHeight: 400, minHeight: 400}}>
      <CardActionArea>
        <CardMedia>
        <img src={`./${img}`} alt="{img}" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {brand}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <ItemCount onAdd={onAdd} />
      </CardActions>
    </Card>
  );
}