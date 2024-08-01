
import { useState } from 'react';

import { Typography } from '@mui/material'; 

import MainLayout from './components/layouts/MainLayout.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentContainer from './components/ContentContainer.jsx';
import TapPanel from './components/tabs/TabPanel.jsx';


function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
        <Sidebar value={value} handleChange={handleChange} />
        <ContentContainer>
           <TapPanel value={value} index={0}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>صفحه اصلی</Typography>
           </TapPanel>
           <TapPanel value={value} index={1}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>درباره من</Typography>
           </TapPanel>
           <TapPanel value={value} index={2}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>رزومه من</Typography>
           </TapPanel>
           <TapPanel value={value} index={3}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>نمونه کارها</Typography>
           </TapPanel>
           <TapPanel value={value} index={4}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>نظرات</Typography>
           </TapPanel>
           <TapPanel value={value} index={5}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>ارتباط با من</Typography>
           </TapPanel>
        </ContentContainer>
    </MainLayout>
  );
};

export default App;
