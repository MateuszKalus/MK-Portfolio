import './styles.css'
import {Link} from 'gatsby'
import Moon from '../images/moon.png'
import Sun from '../images/sun.png'

import setBackground from "./background";
import React, {useState, useEffect} from "react";


const IndexPage = () => {

    const [isNight, setIsNight] = useState(true);
    const [isBackgroundSet, setIsBackgroundSet] = useState(false);

    const getGradient = (deg, opacity) => {
        if (isNight) return `linear-gradient(${deg}deg, rgba(0,0,0,0) 25%, rgba(40,70,96,${opacity}) 90%)`;
        else return `linear-gradient(${deg}deg, rgba(0,0,0,0) 25%, rgba(135,183,210,${opacity}) 90%)`;
    };

    useEffect(() => {
        if (!isBackgroundSet) {
            setBackground();
            setIsBackgroundSet(true);
        }


        window.addEventListener('scroll', handleScroll);

        const sections = document.querySelectorAll('section');
        const canvas = document.querySelector('canvas');


        if (isNight) {
            canvas.style.opacity = 1;
            sections.forEach((section) => {
                section.classList.add('night');
                section.classList.remove('day');
            })
        } else {
            canvas.style.opacity = 0;

            sections.forEach((section) => {
                section.classList.remove('night');
                section.classList.add('day');
            })
        }

        handleScroll(); //for updating gradient


        return () => window.removeEventListener('scroll', handleScroll);
    }, [isNight]);


    const handleScroll = () => {

        let background = document.querySelector('.moving-background');
        let moon = document.querySelector('#moon-img')

        let moonRect = moon.getBoundingClientRect();

        let howLowUnderTopBorder = moonRect.y + moon.offsetHeight / 2;

        if (howLowUnderTopBorder < 0) {
            console.log(howLowUnderTopBorder);
            const initialAngle = 45;
            const initialOpacity = 0.7;

            let deg = initialAngle - Math.floor(howLowUnderTopBorder / 5 * (-1));
            let opacity = initialOpacity - Math.floor(howLowUnderTopBorder / 5 * (-1)) / 100;

            if (opacity < 0) opacity = 0;
            if (deg < 0) deg = 0;

            background.style.backgroundImage = getGradient(deg, opacity);
            // background.style.top = '-200px';
        } else {
            let deg = 45;
            let opacity = 0.7;
            background.style.backgroundImage = getGradient(deg, opacity);

        }

    };

    const handleThemeChange = (e) => {
        console.log(e.target.checked);
        setIsNight(e.target.checked);

    }

    return (
        <main>
            <div className={'moving-background'}></div>

            <section className={'main-page night'} id={'main-page'}>
                <canvas className={'stars-background'}/>
                <img id={'moon-img'} src={Moon}/>
                <img id={'sun-img'} src={Sun}/>

                <label className={'theme-slicer'}>
                    <input defaultChecked={true} type="checkbox" onChange={handleThemeChange}/>
                    <span></span>
                </label>
                <h1>WITAJ ŚWIECIE</h1>
                <a href={'#main-page'} style={{color: "white"}}>{isNight.toString()}</a>

            </section>


            <section className={'night'}>

                <a href={'#main-page'}>IsNight: {(isNight.toString())}</a>

            </section>
        </main>
    )
}


export default IndexPage
