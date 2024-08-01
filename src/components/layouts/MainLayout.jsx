import { ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { Typography } from '@mui/material';
import { theme } from '../ui/theme';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import Sidebar from '../Sidebar';
import ContentContainer from '../ContentContainer';


//* NOTE Create RTL Cache
const cacheRTL = createCache({
    key:'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

const MainLayout = ({children}) => {
    return(
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>وبسایت شخصی من</title>
                    </Helmet>
                        {/* Grid System */}
                        <Grid2 container sx={{height: '100vh'}}>
                            {children}
                        </Grid2>

                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
    
};

export default MainLayout;