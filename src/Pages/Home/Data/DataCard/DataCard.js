import { Container, Grid, MenuItem, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DataCards from '../DataCards/DataCards';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import moment from 'moment';


const DataCard = () => {
    const [apiData , setApiData] = useState([])
    const [displayInfo, setDisplayInfo] = useState([]);
    const [filtter, setFilter] = React.useState('');

    const handleChange = (event) => {
      setFilter(event.target.value);
    };
    useEffect(()=>{


        fetch('https://api.spacexdata.com/v3/launches')
        .then(res => res.json())
        .then(data => {
            setApiData(data)
             setDisplayInfo(data)
            })
    
    
    },[])
    const clearFilters = () =>{


  
        fetch('https://api.spacexdata.com/v3/launches')
        .then(res => res.json())
        .then(data => {
            setApiData(data)
             setDisplayInfo(data)
            })
    
    
    }

    const handleMenuTabs = (type) => {
        
        const successLunched = apiData.filter((item) => type === item.launch_success)
        setDisplayInfo(successLunched)
    }


   const lastYear = () =>{
 
    //Sunday 4 September 2016 - Week 36
    let today    = moment();
    var lastY = moment(today).add(-1, 'year').format('YYYY');
    
    const lastYearData = apiData.filter((item) => '2020' === item.launch_year)

    setDisplayInfo(lastYearData);
    
   }
   const lastMonth = () =>{
 
    //Sunday 4 September 2016 - Week 36
    let today    = moment();
    var lastM = moment(today).add(-1, 'month').format('MMYY');
    const lastMonthData = apiData.filter((item) => '2020' === item.launch_year)
    
    console.log(lastM)
    
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
      <Button variant="outlined" color="error" onClick={() => handleMenuTabs(false)} >
        Failed
      </Button>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filtter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem onClick={lastYear} value={10}>Last Year</MenuItem>
          <MenuItem onClick={lastMonth} value={20}>Last Month</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button onClick={clearFilters} variant="outlined"  >
        Clear 
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