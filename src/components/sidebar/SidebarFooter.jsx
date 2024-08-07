import {  Typography, Box } from '@mui/material';
import { FavoriteRounded, CopyrightRounded } from '@mui/icons-material';

const SidebarFooter = () => {
    return(
        <Box sx={{flexGrow: 1,display: 'flex',flexDirection: 'column', justifyContent: 'end', alignItems: 'center',  mt: '1rem'}}>
            <Typography variant='subtitle2' color= 'text.primary' sx={{mt: '1rem', paddingX: '35px' }}>
                طراحی شده با{''} <FavoriteRounded sx={{color: 'tomato', height: 20, verticalAlign: 'middle'}} />
                
            <Typography variant='subtitle2' sx={{ mt: '1rem'}}>کپی رایت 1403 {' '} <CopyrightRounded color='whitesmoke' sx={{verticalAlign: 'middle', height: 18}} />  </Typography>
            </Typography>
        </Box>
    )
};

export default SidebarFooter;