import { useState, useContext } from "react";

import {  SidebarContent } from "../sidebar";
import {  Drawer, SwipeableDrawer, Fab, Box } from '@mui/material';
import MainContext from '../../context/index';

const SidebarDrawer = () => {
    const {drawerOpen, setDrawerOpen} = useContext(MainContext);

    return(
        <Drawer
         open={drawerOpen}
         variant='temporary'
         onClose={() => setDrawerOpen(false)} 
         sx={{
            "& .MuiDrawer-paper": {
                width: 300,
            },
            display: {
                xs: 'block',
                sm: 'block',
                md: 'none',
                lg: 'none',
            }
         }}
         >
            {/* Drawer */}
            <SidebarContent  />
        </Drawer>
    )
};

export default SidebarDrawer;