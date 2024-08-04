import { Helmet } from "react-helmet-async";

import { Box, Typography, Card, CardContent, Divider, Chip} from "@mui/material";
import { devWorkInfo } from "../constants/details";

const Resume = {{helmetTitle}} => {
    return(
        <Card sx={{
            height: "100vh",
            backgroundColor: "whitesmoke",
            overflowY: "scroll",

        }}>
            <Helmet><title>وبسایت شخصی | درباره من</title></Helmet>
            <CardContent></CardContent>
            
        </Card>
    );
};
export default Resume;