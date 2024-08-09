import { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import {  Card, CardContent } from "@mui/material";

import {SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded} from "@mui/icons-material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CustomDivider from "../components/common/CustomDivider";
import DevExpTimeline from "./components/DevExpTimeline";
import DevEduTimeline from "./components/DevEduTimeline";

const Resume = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return() => {
            setLoading(false);
        };

    }, []);


    return(
        <Card sx={{
            height: "100vh",
            backgroundColor: "whitesmoke",
            overflowY: "scroll",

        }}>
            <Helmet><title>{helmetTitle}</title></Helmet>
            <CardContent>
                    <CustomDivider
                        bColor="error.main"
                        cColor="error"
                        icon={<SettingsEthernetRounded />}
                        align="center"
                        text="رزومه من"
                     />
            <Grid2 container sx={{mt: 4}}>
                <Grid2 xs={6}>
                    
                <CustomDivider
                        bColor="warning.main"
                        cColor="warning"
                        icon={<HomeRepairServiceRounded />}
                        align="center"
                        text="تجربیات من"
                />
                <DevExpTimeline loading={loading} />
                </Grid2>
                <Grid2 xs={6}>
                <CustomDivider
                        bColor="info.main"
                        cColor="info"
                        icon={<SchoolRounded />}
                        align="center"
                        text="تحصیلات من"
                /> 
                
                <DevEduTimeline loading={loading} />
                </Grid2>
            </Grid2>
            </CardContent>
            
        </Card>
    );
};
export default Resume;