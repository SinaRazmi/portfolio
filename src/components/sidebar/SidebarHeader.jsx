import { Avatar, Typography } from '@mui/material';

import avatar from '../../assets/avatar.jpg';
import ThemeActionButton from '../ThemeActionButton';
import SocialMediaIcons from '../SocialMediaIcons';

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
            <SocialMediaIcons/>
        </>
    )
};

export default SidebarHeader;