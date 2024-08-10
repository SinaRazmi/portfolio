import { Helmet } from "react-helmet-async";
import { Card, CardContent} from "@mui/material";
import {ForumRounded} from "@mui/icons-material"

import CustomDivider from "../components/common/CustomDivider";
import { CommentsSlider } from "./components";

const Comments = ({helmetTitle}) => {
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
                <CustomDivider 
                    bColor="secondary.main"
                    cColor="secondary"
                    icon={<ForumRounded />}
                    align="center"
                    text="نظرات دانشجویان"
                />
                <CommentsSlider options={options} />
            </CardContent>
        </Card>
    );
};

export default Comments;