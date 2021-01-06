import './styles.css'
import './sky.css'
import {Link} from 'gatsby'
import Moon from '../images/moon.png'
import Sun from '../images/sun.png'

import React, {useState, useEffect} from "react";


const IndexPage = () => {

    const [isNight, setIsNight] = useState(true);

    const getGradient = (deg, opacity) => {
        if (isNight) return `linear-gradient(${deg}deg, rgba(0,0,0,0) 45%, rgba(0,69,97,${opacity}) 95%)`;
        else return `linear-gradient(${deg}deg, rgba(0,0,0,0) 45%, rgba(109,185,213,${opacity}) 95%)`;
    };

    useEffect(() => {

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

    return (
        <main>
            <div className={'moving-background'}></div>
            <section className={'main-page night'} id={'main-page'}>
                <div className={'content'}>
                    <h1 className={'opacity-marker'}>Hi.</h1>
                    <span>My name is Mateusz.</span>
                    <div className={'text-content'}>
                        <p>
                            I am <strong className={'in-text-strong'}>Front-End Developer</strong> and Electronics Engineer. I am also familiar with the <u className={'in-text-strong'}>Back-End</u> and <u className={'in-text-strong'}>Design</u> technologies that I use as a tool in my work.
                        </p>
                        <p className={'important-text'}>
                            For me, programming is a well of endless possibilities, and each new line of code is a
                            miracle of creation.
                        </p>
                        <p>
                            However, at the end of the day, the most important thing is that the project meets the
                            requirements. In my projects, I pay attention to optimization, reliability and stability.

                        </p>
                        <p>
                            I believe that success in my profession lies in combining good quality code and adopting a
                            strategy:
                            from general to specific.
                        </p>
                        <p id={'last-sentence'}>
                            And constant learning of course 😃
                        </p>

                    </div>
                </div>

                <div className={'sky-container'}>
                    <sky>
                        <div className={'text'}></div>
                        <div className={'stars'}></div>
                        <div className={'stars1'}></div>
                        <div className={'stars2'}></div>
                        <div className={'shooting-stars'}></div>
                    </sky>
                </div>

                <img id={'moon-img'} className={'orb'} src={Moon}/>
                <img id={'sun-img'} className={'orb'} src={Sun}/>

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
