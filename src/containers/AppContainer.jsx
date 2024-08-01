import { useState } from 'react';

import { Typography, Box } from '@mui/material'; 

import MainLayout from '../layouts/MainLayout.jsx';
import { Sidebar } from '../components/sidebar';
import PagesContainer from './PagesContainer.jsx';
import Page from '../pages/components/Page.jsx';
import SidebarContainer from './SidebarContainer.jsx';
import MainContext from '../context/index.js';
import DrawerActionButton from '../components/drawer/DrawerActionButton.jsx';
import SwipeableViews from 'react-swipeable-views';

import {Home, About} from '../pages/index.js';

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen]= useState(false);
  
  const handlePageNumber = (event, newValue) => {
   setPageNumber(newValue);
  };

  return (
   <MainContext.Provider value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen}}>
      <MainLayout>
        <SidebarContainer>
            <Sidebar pageNumber={pageNumber} handleChange={handlePageNumber} />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
        <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber} >
        <Page pageNumber={pageNumber} index={0}>
             <Home />
         </Page>
         <Page pageNumber={pageNumber} index={1}>
            
             <About />
         </Page>
         <Page pageNumber={pageNumber} index={2}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>رزومه من</Typography>
         </Page>
         <Page pageNumber={pageNumber} index={3}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>نمونه کارها</Typography>
         </Page>
         <Page pageNumber={pageNumber} index={4}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>نظرات</Typography>
         </Page>
         <Page pageNumber={pageNumber} index={5}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>ارتباط با من</Typography>
         </Page>
        </SwipeableViews>

           
        </PagesContainer>
    </MainLayout>
   </MainContext.Provider>
    
  );
};

export default App;
