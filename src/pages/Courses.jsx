import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import EllipsisText from "react-ellipsis-text";

import {  Typography, Card, CardContent, Divider, Chip, Slide, CardActionArea, CardMedia, CardActions, Button} from "@mui/material";
import { Timeline, TimelineItem, TimelineDot, TimelineContent, TimelineConnector, TimelineSeparator } from "@mui/lab";

import {SchoolRounded} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { courses } from "../constants/courses";

const Courses = ({helmetTitle}) => {
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
                <Chip color="secondary" icon={<SchoolRounded />} label={
                    <Typography variant="body1" color='black' sx={{textAlign: 'center'}}>
                        دوره های من                    
                    </Typography>
                } sx={{ p: 3}}></Chip>
                </Divider> 

            </Slide>    
                <Grid2 container sx={{mx: 3}}>
                    {
                        courses.map((course, index) => (
                            <Grid2 key={index} xs={12} sm={6} md={6} lg={4} sx={{px: 2, mb:2}} >
                                <Slide direction="up" in={loading} style={{
                                    transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                                }}>
                                    <Card sx={{maxWidth: 345, backgroundColor: "steelblue", mt: '2rem'}}>
                                        <CardActionArea>
                                            <CardMedia component="img" height="250" width="200" 
                                                image={course.image} alt={course.title}
                                            />
                                            <CardContent>
                                                <Typography variant="body1" textAlign="left" gutterBottom>
                                                    {course.title}
                                                </Typography>
                                                <Typography variant="body2" textAlign="left" color="text.secondary" gutterBottom sx={{direction: 'ltr'}} >
                                                   <EllipsisText text={course.info} length={"100"} />
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button href={course.link} size="small" color="primary" target="_blank">
                                                اطلاعات بیشتر
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Slide>
                            </Grid2>
                        ))
                    }
                </Grid2>


            </CardContent>
            </Card>
     );
    };

    export default Courses;