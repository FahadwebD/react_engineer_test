import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useData from '../../../../hooks/useData';
import DataCards from '../DataCards/DataCards';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = apiData.filter(data => data?.rocket?.rocket_name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayInfo(matchedProducts);
    }
    return (
        <div>
           <Container>
            <Typography variant="h4" sx={{ color: '#5CE7ED', mb: 3 }}>Information</Typography>
            <Box
      sx={{
        mb: 3,
        width: 500,
        maxWidth: '100%',
        
      }}
    >
      <TextField 
      onChange={handleSearch}
      
      fullWidth label="Search" id="fullWidth" />
    </Box>
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