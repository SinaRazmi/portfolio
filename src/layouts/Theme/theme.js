import {createTheme} from '@mui/material/styles';


//* NOTE Create Custom Theme
export const lightTheme = createTheme({
  direction: 'rtl',
  palette:{
    mode: 'light',
    primary:{
        main: '#8be9fd'
    },
    secondary:{
        main: "#bd93f9"
    },
  },
  typography: {
    fontFamily: 'vazir, roboto',
    button: {
        fontFamily: 'tahoma',
    }
  },
});

export const darkTheme = createTheme({
  direction: 'rtl',
  palette:{
    mode: 'dark',
    primary:{
        main: '#8be9fd'
    },
    secondary:{
        main: "#bd93f9"
    },
  },
  typography: {
    fontFamily: 'vazir, roboto',
    button: {
        fontFamily: 'tahoma',
    }
  },
});



