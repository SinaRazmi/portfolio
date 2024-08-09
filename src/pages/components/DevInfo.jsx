import { Typography } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

const Info = ({children}) => {
    return(
        <Typography variant="body1" color='black' textAlign='left' sx={{mt: 2}} >
          {children}
          <KeyboardArrowLeftRoundedIcon sx={{ verticalAlign: 'bottom', color: 'primary.main'}} />
        </Typography>
    );
};

const DevInfo = () => {
  return(
    <>
      <Info>نام و نام خانوادگی: سینا رزمی</Info>
      <Info>سن: 30</Info>
      <Info>شهر: تهران</Info>
      <Info>شماره موبایل: 09125751313</Info>
      <Info>sinarazmi94@gmail.com :آدرس ایمیل</Info>
    </>
  )
}

export default DevInfo;