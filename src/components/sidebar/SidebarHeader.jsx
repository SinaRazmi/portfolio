import { Avatar, Typography, Box, IconButton } from '@mui/material';


import {GitHub, Telegram, Instagram, WhatsApp} from "@mui/icons-material";
import avatar from '../../assets/avatar.jpg';
import ThemeActionButton from '../ThemeActionButton';

const SidebarHeader = () => {
    return(
        <>
             <ThemeActionButton />
             <Avatar
                src={avatar}
                variant='rounded'
                sx={{height:140, width:140, margin: '0 auto', display:{
                    xl: 'block',
                    lg: 'block',
                    md: 'block',
                    sm: 'none',
                    xs: 'none'
                }}}/>
            
            <Typography variant='h5'  color='whitesmoke'>سینا رزمی</Typography>
            <Typography variant='caption'  color='whitesmoke'>توسعه دهنده فول استک</Typography>

            <Box component= 'div' sx={{m: '0 auto', textAlign: 'center'}}>
                <IconButton aria-label='Telegram'>
                    <a target='_blank' href='#' rel='noopener noreferrer'>
                        <Telegram sx={{ color: 'gray'}} />
                    </a>
                </IconButton>
                <IconButton aria-label='Github'>
                    <a target='_blank' href='https://github.com/SinaRazmi' rel='noopener noreferrer'>
                        <GitHub sx={{ color: 'gray'}} />
                    </a>
                </IconButton>
                <IconButton aria-label='WhatsApp'>
                    <a target='_blank' href='#' rel='noopener noreferrer'>
                        <WhatsApp sx={{ color: 'gray'}} />
                    </a>
                </IconButton>
                

            </Box>
        </>
    )
};

export default SidebarHeader;