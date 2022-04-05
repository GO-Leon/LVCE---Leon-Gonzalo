import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'






export default function MultiActionAreaCard({props}) {
  const { title, price, brand, img, category, stock, id } = props
  return (
    <Card sx={{ maxWidth: 300, minWidth:300, maxHeight: 320, minHeight: 320, marginTop: 2, marginLeft:0.5, marginRight:0.5,}}>
      <CardActionArea>
        <CardMedia>
        <img src={`./${img}`} alt="{img}" />
        </CardMedia>
        <CardContent className='cardContent__detail'>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {brand}
          </Typography>
          <Button>
            <Link to={`/${category}/${id}`}>Ver mas</Link>
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}