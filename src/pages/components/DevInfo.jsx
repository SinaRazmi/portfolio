import { Typography } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

const DevInfo = ({children}) => {
    return(
        <Typography variant="body1" color='black' textAlign='left' sx={{mt: 2}} >
          {children}
          <KeyboardArrowLeftRoundedIcon sx={{ verticalAlign: 'bottom', color: 'primary.main'}} />
        </Typography>
    );
};

export default DevInfo;