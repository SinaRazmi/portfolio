import { useContext } from 'react';

import {Tabs, Tab, Typography, Box, Avatar, Divider, Icon, iconButtonClasses} from '@mui/material';
import { grey } from '@mui/material/colors';

import MainConext from '../../context/index';
import { tabsData } from '../data/tabsData.sidebar';


const SidebarTabs = () => {
    const { setDrawerOpen, pageNumber, handlePageNumber} = useContext(MainConext);

    const data = tabsData();
    
    return(
        <Tabs orientation='vertical' variant='scrollable' scrollButtons='auto' allowScrollButtonsMobile
            value={pageNumber} onChange={handlePageNumber}   
            >

            {
                data.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition='start'
                    sx={{
                        backgroundColor: grey[800],
                        borderRadius: 2,
                        mx: '.8rem',
                        my: '1',
                        mt:'1rem',
                        "&.MuiTab-root": {
                            minHeight: 50,
                        },
                        }}

                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                    />
                ))
            }
                


                {/* <Tab label='درباره من' icon={<FaceRounded />} iconPosition='start' sx={{backgroundColor: grey[800], mx: '1rem', mt: '.5rem'}} /> */}
                

            </Tabs>    
    )
};

export default SidebarTabs;