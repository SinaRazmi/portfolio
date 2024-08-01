import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { grey } from '@mui/material/colors';

const SidebarContainer = ({children}) => {
    return(
        <Grid2 xs={0} sm={0} md={3} lg={3} xl={2} sx={{backgroundColor: grey[900],
            height: '100vh', overflowY :'auto', overflowX: 'hidden',
        }}>
            {children}
        </Grid2>
    )
};

export default SidebarContainer;