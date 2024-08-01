import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const ContentContainer = ({children}) => {
    return(
        <Grid2 xs={12} sm={12} md={9} lg={9} xl={10} sx={{backgroundColor: 'secondary.main'}}>
            {/* <Typography variant='h5' sx={{textAlign: 'center'}}>محتوای اصلی</Typography> */}
            {children}
        </Grid2>
    )
};

export default ContentContainer;