import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useData from '../../../../hooks/useData';
import DataCards from '../DataCards/DataCards';

const DataCard = () => {
    const {apiData} = useData()


    return (
        <div>
             <Container>
            <Typography variant="h4" sx={{ color: '#5CE7ED', mb: 3 }}>Information</Typography>
         
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