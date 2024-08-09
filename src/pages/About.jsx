import { Helmet } from "react-helmet-async";
import {  Card, CardContent, Avatar } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {CodeRounded, PersonRounded} from '@mui/icons-material';

import {DevInfo, Skills, DevWorkCount} from "./components";
import avatar from '../assets/avatar.jpg';
import CustomDivider from "../components/common/CustomDivider";

const About = ({helmetTitle}) => {
    return(
        <Card sx={{
            height: "100vh",
            backgroundColor: "whitesmoke",
            overflowY: "scroll",
        }}>
            <Helmet><title>{helmetTitle}</title></Helmet>
            <CardContent>
                <Grid2 container sx={{mx: 3}}>
                    <Grid2 xs={12} sm={12} md={8} lg={8} xl={8}>
                        <CustomDivider 
                            bColor="primary.main"
                            cColor="primary"
                            icon={<CodeRounded />}
                            align="right"
                            text="توسعه دهنده فول استک"
                         />
                            <Grid2 container>
                                <Grid2 xs={4} sm={4} md={3} lg={3} sx={{
                                   display: {
                                    "xs" : "none",
                                    "sm": "block",
                                    "md": "block"
                                   },
                                   mt: 2,
                                }}>
                                   
                                    <DevWorkCount />
                                </Grid2>
                                <Grid2 xs={12} sm={8} md={9} lg={9} >
                                   <DevInfo />
                                </Grid2>
                            </Grid2>
                    </Grid2>
                    <Grid2 xs={0} sm={0} md={4} lg={4} xl={4}>
                            <Avatar src={avatar} variant="rounded" sx={{height: 250, width: 250, margin: '0 auto',
                            display:{
                                xl: 'block',
                                lg: 'block',
                                md: 'block',
                                sm: 'none',
                                xs: 'none',
                            },
                            
                            }} >SR</Avatar>
                    </Grid2>
                </Grid2>
                <Grid2 container>
                    <Grid2 sx={{width: 1, mt: 1}}>
                    <CustomDivider 
                            bColor="secondary.main"
                            cColor="secondary"
                            icon={<PersonRounded />}
                            align="center"
                            text="مهارت های من"
                    />
                    
                    <Skills />
                     </Grid2>           
                </Grid2>
            </CardContent>
        </Card>
    );
};

export default About;