import { useEffect, useState } from 'react';

import { useMediaQuery } from '@mui/material'; 
import { useTheme } from '@mui/material/styles';
import { Sidebar } from '../components/sidebar';
import SwipeableViews from 'react-swipeable-views';

import SidebarContainer from './SidebarContainer.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import PagesContainer from './PagesContainer.jsx';
import Page from '../pages/components/Page.jsx';
import MainContext from '../context/index.js';
import DrawerActionButton from '../components/drawer/DrawerActionButton.jsx';
import {Home, About, Resume, Courses, Comments, Contact} from '../pages/index.js';



function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen]= useState(false);
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: dark)`);

  useEffect(() => {
     setMode(prefersDarkMode ? "dark" : "light");
  }, [])

  useEffect(() => {
     if(isMdUp){
          setDrawerOpen(false);
     }
  },[isMdUp]);
  
  const handlePageNumber = (event, newValue) => {
     setPageNumber(newValue);
  };

  const handleThemeChange = () =>{
     setMode(prevMode => prevMode === "light" ? "dark" : "light");
  };

  return (
   <MainContext.Provider value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen, handleThemeChange}}>
      <MainLayout mode={mode}>
        <SidebarContainer>
            <Sidebar pageNumber={pageNumber} handleChange={handlePageNumber} />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
        <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber} >
        <Page pageNumber={pageNumber} index={0}>
             <Home helmetTitle= "وبسایت شخصی | صفحه اصلی" />
         </Page>
         <Page pageNumber={pageNumber} index={1}>
            
             <About helmetTitle= "وبسایت شخصی | درباره من" />
         </Page>
         <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle= "وبسایت شخصی | رزومه من" />
         </Page>
         <Page pageNumber={pageNumber} index={3}>
              <Courses helmetTitle=" وبسایت شخصی | دوره های من" />
         </Page>
         <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle=" وبسایت شخصی | نظرات دانشجویان" />
         </Page>
         <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitle=" وبسایت شخصی | ارتباط با من" />
         </Page>
        </SwipeableViews>
        </PagesContainer>
    </MainLayout>
   </MainContext.Provider>
    
  );
};

export default App;
