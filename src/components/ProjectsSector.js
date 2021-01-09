import React, {Fragment} from "react";
import Plx from 'react-plx';
import './ProjectsSector.css'
import ProjectWrapper from "./project-wrapper/ProjectWrapper";

import GolfDashboard from "../images/websites_images/golfdashboard.png"
import CovidLab from "../images/websites_images/covidlab.png"
import Rcku from "../images/websites_images/rcku.png"
import Logo from "../images/tech_icons/html5.png"

const ProjectsSector = () => {

    const parallaxData = [
        {
            start: '.projects-section',
            end: '100%',
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                },
            ],
        },
        {
            start: '.projects-section',
            end: '100%',
            properties: [
                {
                    startValue: 200,
                    endValue: 0,
                    property: 'translateY',
                },
            ],
        },

    ];

    return (
        <Fragment>
            <Plx
                className='projects-sector-parallax'
                parallaxData={ parallaxData }
            >
                {/*<h2>Kilka moich projektów: </h2>*/}

                <ProjectWrapper link={Rcku}/>
                <ProjectWrapper link={CovidLab}/>
                <ProjectWrapper link={GolfDashboard}/>

            </Plx>


        </Fragment>
    )
};

export default ProjectsSector;