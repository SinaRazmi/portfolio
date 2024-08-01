import { Box, Divider} from '@mui/material';
import { grey } from '@mui/material/colors';
import { SidebarHeader, SidebarFooter, SidebarTabs } from './index';


const SidebarContent = () => {
        return(
            <Box sx={{
                justifyContent: 'center',
                textAlign: 'center',
                mt:2,
            }}>
                <SidebarHeader />
                <Divider variant='middle' color={grey[800]} />
                <SidebarTabs  />
                <Divider variant='middle' color={grey[800]} sx={{mt: 2}} />
                <SidebarFooter />
            </Box>
    );
};

export default SidebarContent;