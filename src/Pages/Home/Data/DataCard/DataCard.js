import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DataCards from '../DataCards/DataCards';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const DataCard = () => {
    const [apiData , setApiData] = useState([])
    const [displayInfo, setDisplayInfo] = useState([]);

    useEffect(()=>{


        fetch('https://api.spacexdata.com/v3/launches')
        .then(res => res.json())
        .then(data => {
            setApiData(data)
             setDisplayInfo(data)
            })
    
    
    },[])

    const handleMenuTabs = (type) => {
        
        const successLunched = apiData.filter((item) => type === item.launch_success)
        setDisplayInfo(successLunched)
    }




    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = apiData.filter(data => data?.rocket?.rocket_name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayInfo(matchedProducts);
    }


    return (
        <div>
           <Container sx={{mb:3}}>
            <Typography variant="h4" sx={{ color: '#5CE7ED', mb: 3 }}>Information</Typography>
           
    <Stack direction="row" spacing={2}>
    
      <TextField 
      onChange={handleSearch}
      
      fullWidth label="Search" id="fullWidth" />
    
      <Button variant="contained" color="success" onClick={() => handleMenuTabs(true)}>
        Success
      </Button>
      <Button variant="outlined" color="error" onClick={() => handleMenuTabs(false)}>
        Error
      </Button>
    </Stack>
    </Container>  
    <Container>
            <Grid container spacing={2}>
            {
                displayInfo.map(data=> <DataCards
                data={data}
                ></DataCards>)
            }
            </Grid>
            </Container>
        </div>
    );
};

export default DataCard;