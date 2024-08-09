import { Box, IconButton } from "@mui/material";
import {GitHub, Telegram, Instagram, WhatsApp} from "@mui/icons-material";

const SocialMediaIcons = () => {
    return(
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
    )
};

export default SocialMediaIcons;