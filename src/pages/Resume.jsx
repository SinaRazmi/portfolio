import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import {  Typography, Card, CardContent, Divider, Chip, Slide} from "@mui/material";
import { Timeline, TimelineItem, TimelineDot, TimelineContent, TimelineConnector, TimelineSeparator } from "@mui/lab";
import { devEdu } from "../constants/details";

import {SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded} from "@mui/icons-material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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
            <Helmet><title>  {helmetTitle}  </title></Helmet>
            <CardContent>
                <Slide direction="down" in={loading} style={{transitionDelay: loading ? '200ms':'0ms'}}>

                <Divider textAlign="center" sx={{"&::before, &::after":{borderColor: "secondary.main"}}}>
                <Chip color="secondary" icon={<SettingsEthernetRounded />} label={
                    <Typography variant="body1" color='black' sx={{textAlign: 'center'}}>
                          مهارت های من
                                        
                    </Typography>
                } sx={{ p: 3}}></Chip>
                </Divider> 

                </Slide>
                
            <Grid2 container sx={{mt: 4}}>
                <Grid2 xs={6}>
                    <Slide direction="down" in={loading} style={{transitionDelay: loading ? '200ms':'0ms'}}>
                    <Divider textAlign="center" sx={{"&::before, &::after":{borderColor: "secondary.main"}}}>
                    <Chip color="warning" icon={<HomeRepairServiceRounded />} label={
                        <Typography variant="body1" color='black' sx={{textAlign: 'center'}}>
                            تجربیات  
                        </Typography>
                    } sx={{ p: 3}}></Chip>
                    </Divider>
                    </Slide>
                    
                <Timeline position="right" sx={{direction: 'ltr'}}>
                    {
                        devEdu.map((item, index) => (
                            <Slide direction="up" in={loading} style={{
                                transitionDelay: loading ? `${index + 3}99ms` :"0ms" }}> 

            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot color="warning" variant="outlined">
                                        <HomeRepairServiceRounded color="warning" />
                                    </TimelineDot>

                                    {index != 2? <TimelineConnector /> : null}
                                
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="caption" color='gray'>
                                        {item.year}
                                    </Typography>
                                    <Typography variant="body1" color='black'>
                                        {item.cert}
                                    </Typography>
                                    <Typography variant="body2" color='black'>
                                        {item.major}
                                    </Typography>
                                    <Typography variant="body2" color='black'>
                                        {item.place}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            </Slide>
                            
                        ))
                    }
                </Timeline>
                </Grid2>
                <Grid2 xs={6}>
                <Divider textAlign="center" sx={{"&::before, &::after":{borderColor: "secondary.main"}}}>
                <Chip color="info" icon={<SchoolRounded />} label={
                    <Typography variant="body1" color='black' sx={{textAlign: 'center'}}>
                        تحصیلات                                         
                    </Typography>
                } sx={{ p: 3}}></Chip>
                </Divider> 
                <Timeline position="right" sx={{direction: 'ltr'}}>
                    
                {devEdu.map((item, index) => (
                        <Slide direction="up" in={loading} style={{
                                transitionDelay: loading ? `${index + 3}99ms` :"0ms" }}> 

                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot color="info" variant="outlined">
                                        <SchoolRounded color="info" />
                                    </TimelineDot>

                                    {index != 2? <TimelineConnector /> : null}
                                
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant="caption" color='gray'>
                                        {item.year}
                                    </Typography>
                                    <Typography variant="body1" color='black'>
                                        {item.cert}
                                    </Typography>
                                    <Typography variant="body2" color='black'>
                                        {item.major}
                                    </Typography>
                                    <Typography variant="body2" color='black'>
                                        {item.place}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Slide>
                            
                        ))
                    }
                </Timeline>
                </Grid2>
            </Grid2>
            </CardContent>
            
        </Card>
    );
};
export default Resume;