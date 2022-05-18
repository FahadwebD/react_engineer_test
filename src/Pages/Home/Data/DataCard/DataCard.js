import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useData from '../../../../hooks/useData';
import DataCards from '../DataCards/DataCards';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const DataCard = () => {
    const {apiData} = useData()


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
      <TextField fullWidth label="Search" id="fullWidth" />
    </Box>
    </Container>  
    <Container>
            <Grid container spacing={2}>
            {
                apiData?.map(data=> <DataCards
                data={data}
                ></DataCards>)
            }
            </Grid>
            </Container>
        </div>
    );
};

export default DataCard;