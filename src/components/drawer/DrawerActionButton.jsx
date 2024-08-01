import { useContext } from "react";
import { Box, Fab} from '@mui/material';
import { MenuRounded } from '@mui/icons-material';
import { red } from '@mui/material/colors';

import MainContext from '../../context/index';

const DrawerActionButton = () => {
    const {setDrawerOpen} = useContext(MainContext);
    return(
        <Box
             sx={{display: {
                position: 'absolute',
                xs: 'block',
                small: 'block',
                md: 'none',
                lg: 'none',
                xl: 'none',
            }}}
        >
            <Fab  aria-label='Sidebar' size='small' sx={{m: 2, backgroundColor: red[500], color: 'white' }} onClick={() => setDrawerOpen(true)}>
                <MenuRounded />
            </Fab>
        </Box>
    )
};

export default DrawerActionButton;