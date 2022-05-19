import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import ReactElasticCarousel from 'react-elastic-carousel';




const DataCards = ({data}) => {

  
    const imageData = data?.links?.flickr_images
    


   
    return (
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
         
             
 

 {imageData.length === 0 ?<CardMedia
          component="img"
          height="140"
          image="https://i.ibb.co/859KWGp/ezgif-com-gif-maker.gif"
          
          alt="green iguana"
        />:<ReactElasticCarousel verticalMode itemsToShow={1}>{imageData.map((item, index) => <li key={index}>  
        
        <CardMedia
            component="img"
            height="140"
            image={item}
            alt="green iguana"
          />
        
        </li>)}</ReactElasticCarousel>}






    
  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.rocket?.rocket_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Flight Number : {data.flight_number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lunched Year :{data.launch_year}
          </Typography>
          <Typography variant="body2" color="text.warning">
            {data.launch_success == true? 'Successfully Lunched':'Failed To Lunch'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    );
};

export default DataCards;