import { useContext } from 'react';

import {Tabs, Tab, Typography, Box, Avatar, Divider, Icon, iconButtonClasses} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import MainConext from '../../context/index';
import { tabsData } from '../../constants/tabsdata';


const SidebarTabs = () => {
    const theme = useTheme();
    const { setDrawerOpen, pageNumber, handlePageNumber} = useContext(MainConext);

    const data = tabsData();
    
    return(
        <Tabs orientation='vertical'
         variant='scrollable'
         scrollButtons='auto'
         allowScrollButtonsMobile
         value={pageNumber}
         onChange={handlePageNumber} 
         indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
         textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}

            >

            {
                data.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition='start'
                    sx={{
                        backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[500],
                        borderRadius: 2,
                        mx: '.8rem',
                        my: '1',
                        mt:'1rem',
                        "&.MuiTab-root": {
                            minHeight: 50,
                        },
                        color: "text.primary",
                        }}

                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                    />
                ))
            };

            </Tabs>    
    );
};

export default SidebarTabs;