import './styles.css'
import './sky.css'
import {Link} from 'gatsby'
import Moon from '../images/moon.png'
import Sun from '../images/sun.png'

import getLanguage from '../languages'

import React, {useState, useEffect} from "react";

const IndexPage = () => {

    const [isNight, setIsNight] = useState(true);
    const [language, setLanguage] = useState('english');

    let l = getLanguage(language);

    console.log(l, language);


    const getGradient = (deg, opacity) => {
        if (isNight) return `linear-gradient(${deg}deg, rgba(0,0,0,0) 45%, rgba(0,69,97,${opacity}) 95%)`;
        else return `linear-gradient(${deg}deg, rgba(0,0,0,0) 45%, rgba(109,185,213,${opacity}) 95%)`;
    };

    useEffect(() => {

        l = getLanguage(language);

        window.addEventListener('scroll', handleScroll);

        const skyBackground = document.querySelector('.sky-container')
        const sections = document.querySelectorAll('section');


        if (isNight) {
            skyBackground.classList.remove('hide');
            sections.forEach((section) => {
                section.classList.add('night');
                section.classList.remove('day');
            })
        } else {
            skyBackground.classList.add('hide');
            sections.forEach((section) => {
                section.classList.remove('night');
                section.classList.add('day');
            })
        }

        handleScroll(2, true); //for updating gradient
        setTimeout(() => {
            handleScroll(); //for updating gradient

        }, 500)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [isNight]);


    const handleScroll = (e, firstTime = false) => {

        console.log(firstTime)


        let background = document.querySelector('.moving-background');
        let orb = document.querySelector('.opacity-marker');

        // if (isNight) orb = document.querySelector('#moon-img');
        // else orb = document.querySelector('#sun-img');


        let orbRect = orb.getBoundingClientRect();

        let howLowUnderTopBorder = orbRect.y + orb.offsetHeight / 2;

        if (howLowUnderTopBorder < 0) {
            const initialAngle = 90;
            const initialOpacity = 0.6;
            const initialOpacityForStars = 1;

            let deg = initialAngle - Math.floor(howLowUnderTopBorder / 5 * (-1));
            let opacity = initialOpacity - Math.floor(howLowUnderTopBorder / 5 * (-1)) / 100;
            let opacityForStars = initialOpacityForStars - Math.floor(howLowUnderTopBorder / 5 * (-1)) / 100;

            if (opacity < 0) opacity = 0;
            if (opacityForStars < 0) opacityForStars = 0;

            if (deg < 0) deg = 0;

            document.querySelector('.sky-container').style.opacity = opacityForStars;

            // if (firstTime) {
            //     deg = initialAngle;
            //     opacity = initialOpacity;
            // }

            background.style.backgroundImage = getGradient(deg, opacity);
        } else {
            let deg = 90;
            let opacity = 0.6;
            background.style.backgroundImage = getGradient(deg, opacity);

        }

    };

    const handleThemeChange = (e) => {
        setIsNight(e.target.checked);
    }

    const handleLanguageChange = (e) => {
        if (e.target.checked) {
            setLanguage('english');
        } else setLanguage('polish');
    }

    return (
        <main>
            <div className={'moving-background'}></div>
            <section className={'main-page night'} id={'main-page'}>

                <div className={'sky-container'}>
                    <sky>
                        <div className={'text'}></div>
                        <div className={'stars'}></div>
                        <div className={'stars1'}></div>
                        <div className={'stars2'}></div>
                        <div className={'shooting-stars'}></div>
                    </sky>
                </div>


                <div className={'content'}>
                    <h1 className={'opacity-marker'}>{l.main_header_1}</h1>
                    <span>{l.main_header_2}</span>
                    <div className={'text-content'}>
                        <p>
                            {l.main_content_0}
                        </p>
                        <p className={'important-text'}>
                            {l.main_content_1}
                        </p>
                        <p>
                            {l.main_content_2}

                        </p>
                        <p>
                            {l.main_content_3}
                        </p>
                        <p id={'last-sentence'}>
                            {l.main_content_4}
                        </p>

                    </div>
                </div>



                <img id={'moon-img'} className={'orb'} src={Moon}/>
                <img id={'sun-img'} className={'orb'} src={Sun}/>

                <div className={'clouds'}>
                    <div className={'cloud cloud-1'}></div>
                    <div className={'cloud cloud-2'}></div>
                    <div className={'cloud cloud-3'}></div>

                </div>
                <label className={'language-slicer'}>
                    <input defaultChecked={true} type="checkbox" onChange={handleLanguageChange}/>
                    <span></span>
                </label>

                <label className={'theme-slicer'}>
                    <input defaultChecked={true} type="checkbox" onChange={handleThemeChange}/>
                    <span></span>
                </label>

                <div className={'arrow-svg'}></div>

            </section>


            <section className={'night'}>

                <a href={'#main-page'}>Link</a>

            </section>
        </main>
    )
}


export default IndexPage
