import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import {Typography, Card, CardContent, Divider, Chip, Slide, Avatar, Box} from "@mui/material";

import {ForumRounded} from "@mui/icons-material"
import Slider from "react-slick";
import { userComments } from "../constants/details";

const Comments = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return() => {
            setLoading(false);
        };

    }, []);

    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "Linear"
    }


    return(
        <Card sx={{
            height: "100vh",
            backgroundColor: "whitesmoke",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
        }}>
            <Helmet><title>  {helmetTitle}  </title></Helmet>
            <CardContent>
                <Slide direction="down" in={loading} style={{transitionDelay: loading ? '200ms':'0ms'}}>
                    <Divider textAlign="center" sx={{"&::before, &::after":{borderColor: "secondary.main"}}}>
                        <Chip color="success" icon={<ForumRounded />} label={
                            <Typography variant="body1" color='black' sx={{textAlign: 'center'}}>
                                نظرات دانشجویان                                        
                            </Typography>
                            } sx={{ p: 3}}>
                        </Chip>
                    </Divider> 
                </Slide>
                <Box component="div" sx={{mt: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Slider {...options}>
                {
                        userComments.map((user, index) => (
                            <Box key={index} component="div" sx={{justifyContent: "center"}}>
                                <Avatar src={user.avatar} variant="circular" sx={{height: 100, width: 100, margin: "0 auto"}}/>
                                <Typography variant="body1" textAlign="center" color="black" >
                                    {user.fullname}
                                </Typography>
                                <Typography variant="body2" textAlign="center" color="black" sx={{mb: 2}} >
                                    {user.jobTitle}
                                </Typography>
                                <Card sx={{backgroundColor: "lightgrey", width: 1/2, m: "0 auto", borderRadius: 5}}>
                                    <CardContent>
                                        <Typography variant="body2" textAlign="center" color="black">
                                            {user.comment}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))
                    }       
                </Slider>
                    
                </Box>
            </CardContent>
        </Card>
    );
};

export default Comments;