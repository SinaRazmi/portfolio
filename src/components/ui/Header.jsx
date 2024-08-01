import React from 'react';
import { AppBar, Toolbar, Button, useScrollTrigger, Typography } from "@mui/material";

import logo from '../../assets/logo.png';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


const Header = () => {
    function ElevationScroll(props) {
        const { children } = props;
        
        const trigger = useScrollTrigger({
          disableHysteresis: true,
          threshold: 0,
        });
      
        return React.cloneElement(children, {
          elevation: trigger ? 4 : 0,
        });
      }
      
    return(
        <>
        <ElevationScroll>
            <AppBar position='static'>
                <Toolbar disableGutters>
                <Grid2 container>
                  <Grid2 md='6' lg='6'>
                    <img src={logo} alt='لوگو وبسایت' style={{width: '5rem'}} />
                    </Grid2>
                    <Grid2 md='6' lg='6'><Typography variant='h6' sx={{m: '1rem'}}>وبسایت شخصی سینارزمی</Typography>
                    <Button variant="contained" color="secondary" size='small' sx={{color: 'yellow'}}>کلیک کن</Button>
                  </Grid2>
                  
                </Grid2>
                  
                </Toolbar>
            </AppBar>
        </ElevationScroll>
           
        </>
    )
};

export default Header;