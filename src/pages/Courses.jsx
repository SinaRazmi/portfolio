import { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import {  Card, CardContent } from "@mui/material";
import {SchoolRounded} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomDivider from "../components/common/CustomDivider";
import { ShowCourses } from "./components";

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
            <CustomDivider 
                bColor="secondary.main"
                cColor="secondary"
                icon={<SchoolRounded />}
                align="center"
                text="دوره های من"
            />   
                <Grid2 container sx={{mx: 3}}>
                    <ShowCourses  loading={loading} />
                </Grid2>
            </CardContent>
            </Card>
     );
    };

    export default Courses;