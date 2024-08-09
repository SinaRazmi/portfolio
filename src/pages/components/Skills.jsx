import { useState, useEffect } from "react";

import Skill from "./Skill";
import {devSkills} from "./Skills.js";

const Skills = () => {
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
        <>
            <Skill name={devSkills.htmlSkill.name} icon={devSkills.htmlSkill.icon} color={devSkills.htmlSkill.color} value={html} />  
            <Skill name={devSkills.cssSkill.name} icon={devSkills.cssSkill.icon} color={devSkills.cssSkill.color} value={css} />
            <Skill name={devSkills.jsSkill.name} icon={devSkills.jsSkill.icon} color={devSkills.jsSkill.color} value={javascript} />
            <Skill name={devSkills.ReactSkill.name} icon={devSkills.ReactSkill.icon} color={devSkills.ReactSkill.color} value={react} />
            <Skill name={devSkills.nodeSkill.name} icon={devSkills.nodeSkill.icon} color={devSkills.nodeSkill.color} value={nodeJs} />
            <Skill name={devSkills.gitSkill.name} icon={devSkills.gitSkill.icon} color={devSkills.gitSkill.color} value={git} />
        </>
    )
};
export default Skills;
