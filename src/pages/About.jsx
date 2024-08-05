import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import { Box, Typography, Card, CardContent, Divider, Chip, Avatar, Tooltip } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CountUp from "react-countup";

import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import DevInfo from "./components/DevInfo";
import avatar from '../assets/avatar.jpg';
import Skill from "./components/Skill";
import {devSkills} from "./components/Skills";
import { devWorkInfo } from "../constants/details";

const About = ({helmeTitle}) => {

    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [react, setReact] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [git, setGit] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setJavascript(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 55);
            });

            setHtml(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 80);
            });

            setCss(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 60);
            });

            setReact(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 50);
            });

            setNodeJs(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 40);
            });

            setGit(oldProgress => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 20);
            });

            
        },30);

    return () => {
        clearInterval(timer);
    };

    });



    return(
        <Card sx={{
            height: "100vh",
            backgroundColor: "whitesmoke",
            overflowY: "scroll",

        }}>
            <Helmet><title>{helmeTitle}</title></Helmet>
            <CardContent>
                <Grid2 container sx={{mx: 3}}>
                    <Grid2 xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Divider textAlign="right" sx={{"&::before, &::after":{borderColor: "primary.main"}}}>
                            <Chip color="primary" icon={<CodeRoundedIcon />} label={
                                <Typography variant="body1" color='black' sx={{textAlign: 'center'}}>
                                    توسعه دهنده فول استک
                                    
                                </Typography>
                            } sx={{ p: 3}}></Chip>
                        </Divider>
                            <Grid2 container>
                                <Grid2 xs={4} sm={4} md={3} lg={3} sx={{
                                   display: {
                                    "xs" : "none",
                                    "sm": "block",
                                    "md": "block"
                                   },
                                   mt: 2,
                                }}>
                                    {
                                        devWorkInfo.map((item, index) => (
                                            <Box key={index} component='div' sx={{width: 1, mb: 1}}>
                                            <Tooltip title={item.tooltilpTitle} placement="right" arrow>
                                            <Chip icon={item.icon} label={
                                                    <Typography variant="body1" color='whitesmoke'>
                                                        
                                                        <CountUp start={0} end={item.total} duration={2} />

                                                    </Typography>
                                                } sx={{p: 2, backgroundColor: item.color , width: 1}} />
                                            </Tooltip>
                                            </Box>
                                        ))
                                    }
                                </Grid2>

                                <Grid2 xs={12} sm={8} md={9} lg={9}>
                                    <DevInfo>نام و نام خانوادگی: سینا رزمی</DevInfo>
                                    <DevInfo>سن: 30</DevInfo>
                                    <DevInfo>شهر: تهران</DevInfo>
                                    <DevInfo>شماره موبایل: 09125751313</DevInfo>
                                    <DevInfo>sinarazmi94@gmail.com :آدرس ایمیل</DevInfo>
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
                        <Divider textAlign="center" sx={{"&::before, &::after":{borderColor: "secondary.main"}}}>
                                <Chip color="secondary" icon={<PersonRoundedIcon />} label={
                                    <Typography variant="body1" color='black' sx={{textAlign: 'center'}}>
                                        مهارت های من
                                        
                                    </Typography>
                                } sx={{ p: 3}}></Chip>
                            </Divider>  
                            <Skill name={devSkills.htmlSkill.name} icon={devSkills.htmlSkill.icon} color={devSkills.htmlSkill.color} value={html} />  
                            <Skill name={devSkills.cssSkill.name} icon={devSkills.cssSkill.icon} color={devSkills.cssSkill.color} value={css} />
                            <Skill name={devSkills.jsSkill.name} icon={devSkills.jsSkill.icon} color={devSkills.jsSkill.color} value={javascript} />
                            <Skill name={devSkills.ReactSkill.name} icon={devSkills.ReactSkill.icon} color={devSkills.ReactSkill.color} value={react} />
                            <Skill name={devSkills.nodeSkill.name} icon={devSkills.nodeSkill.icon} color={devSkills.nodeSkill.color} value={nodeJs} />
                            <Skill name={devSkills.gitSkill.name} icon={devSkills.gitSkill.icon} color={devSkills.gitSkill.color} value={git} />
                     </Grid2>           
                </Grid2>
            </CardContent>
        </Card>
    );
};

export default About;