import {  Typography, Card, CardContent, Slide, CardActionArea, CardMedia, CardActions, Button} from "@mui/material";
import { courses } from "../../constants/courses";
import EllipsisText from "react-ellipsis-text";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const ShowCourses = ({loading}) => {
    return(
        <>
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
        </>
    );
};

export default ShowCourses;