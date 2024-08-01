import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Typography, Box, Divider, Avatar, Hidden, Tabs, Tab } from '@mui/material';
import { grey } from '@mui/material/colors';
import {HomeRounded, FaceRounded, TextSnippetRounded, TerminalRounded, MessageRounded, ConnectWithoutContactRounded, FavoriteRounded, CopyrightRounded } from '@mui/icons-material';

const Sidebar = ({value, handleChange}) => {
        const tabProps = (index) => {
            return{
                id: `sidebar-tab-${index}`,
                'aria-controls': `tabpanel-${index}`
            };
        };

    return(
    <Grid2 xs={0} sm={0} md={3} lg={3} xl={2} sx={{backgroundColor: grey[900]}}>
        <Box sx={{
            justifyContent: 'center',
            textAlign: 'center',
            mt:2,
        }}>
            <Hidden mdDown>
                <Avatar
                src={require('../assets/avatar.jpg')}
                variant='rounded'
                sx={{height:140, width:140, margin: '0 auto'}}/>
            </Hidden>
            <Typography variant='h5'  color='whitesmoke'>سینا رزمی</Typography>
            <Typography variant='caption'  color='whitesmoke'>توسعه دهنده فول استک</Typography>
            <Divider variant='middle' color={grey[800]} sx={{mt: 2}} />
            <Tabs orientation='vertical' variant='scrollable' scrollButtons='auto' allowScrollButtonsMobile
             value={value} onChange={handleChange}   
            >
            
                <Tab
                 {...tabProps(0)}
                 label={
                    <div>
                        <Typography variant='subtitle' color='white'>
                            <HomeRounded sx={{verticalAlign: 'middle', mx: 1}} />
                            خانه
                        </Typography>
                    </div>
                 }
                //  icon={<HomeRounded />}
                //  iconPosition='start'
                 sx={{backgroundColor: grey[800], mx: '1rem', mt: '.5rem'}}
                 />


                {/* <Tab label='درباره من' icon={<FaceRounded />} iconPosition='start' sx={{backgroundColor: grey[800], mx: '1rem', mt: '.5rem'}} /> */}
                <Tab
                 {...tabProps(1)}
                 label={
                    <div>
                        <Typography variant='subtitle' color='white'>
                            <FaceRounded sx={{verticalAlign: 'middle', mx: 1}} />
                            درباره من 
                        </Typography>
                    </div>
                 }
                 sx={{backgroundColor: grey[800], mx: '1rem', mt: '.5rem'}}
                 />

                <Tab
                 {...tabProps(2)}
                 label={
                    <div>
                        <Typography variant='subtitle' color='white'>
                            <TextSnippetRounded sx={{verticalAlign: 'middle', mx: 1}} />
                            رزومه من
                        </Typography>
                    </div>
                 }
                
                 sx={{backgroundColor: grey[800], mx: '1rem', mt: '.5rem'}}
                 />
                 <Tab
                {...tabProps(3)}
                 label={
                    <div>
                        <Typography variant='subtitle' color='white'>
                            <TerminalRounded sx={{verticalAlign: 'middle', mx: 1}} />
                            نمونه کار ها
                        </Typography>
                    </div>
                 }
                 sx={{backgroundColor: grey[800], mx: '1rem', mt: '.5rem'}}
                 />
                 <Tab
                 {...tabProps(4)}
                 label={
                    <div>
                        <Typography variant='subtitle' color='white'>
                            <MessageRounded sx={{verticalAlign: 'middle', mx: 1}} />
                            نظرات
                        </Typography>
                    </div>
                 }
                 sx={{backgroundColor: grey[800], mx: '1rem', mt: '.5rem'}}
                 />
                 <Tab
                 {...tabProps(5)}
                 label={
                    <div>
                        <Typography variant='subtitle' color='white'>
                            <ConnectWithoutContactRounded sx={{verticalAlign: 'middle', mx: 1}} />
                            ارتباط با من
                        </Typography>
                    </div>
                 }
                 sx={{backgroundColor: grey[800], mx: '1rem', mt: '.5rem'}}
                 />

            </Tabs>
            <Divider variant='middle' color={grey[800]} sx={{mt: 2}} />
            <Box sx={{flexGrow: 1,display: 'flex',flexDirection: 'column', justifyContent: 'end', alignItems: 'center',  mt: '1rem'}}>
                 <Typography variant='subtitle2' color= 'whitesmoke' sx={{mt: '1rem', paddingX: '35px' }}>
                   طراحی شده با{''} <FavoriteRounded sx={{color: 'tomato', height: 20, verticalAlign: 'middle'}} />
                   
                   <Typography variant='subtitle2' sx={{ mt: '1rem'}}>کپی رایت 1403 {' '} <CopyrightRounded color='whitesmoke' sx={{verticalAlign: 'middle', height: 18}} />  </Typography>
                 </Typography>
            </Box>

        </Box>
     </Grid2>
    );
};

export default Sidebar;