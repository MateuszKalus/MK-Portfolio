import React from "react";


const data = {
    main_header_1: {
        polish: "Cześć.",
        english: "Hi."
    },
    main_header_2: {
        polish: "Nazywam się Mateusz.",
        english: "My name is Mateusz."
    },
    main_content_0: {
        polish: <>Jestem <strong className={'in-text-strong'}>Front-End Developerem</strong> i Elektronikiem. Potrafię
            również stosować technologie zarówno <u className={'in-text-strong'}>Back-Endowe</u>, jak i te używane do projektowania <u
                className={'in-text-strong'}>Designu</u>, które są mi pomocne przy tworzeniu moich projektów.</>,
        english: <>I am <strong className={'in-text-strong'}>Front-End Developer</strong> and Electronics Engineer. I am
            also familiar with the <u className={'in-text-strong'}>Back-End</u> and <u
                className={'in-text-strong'}>Design</u> technologies that I use as a tool in my work.</>
    },
    main_content_1: {
        polish: "Programowanie jest dla mnie bezdenną studnią możliwości, a każda linia kodu to cud stworzenia.",
        english: "For me, programming is a endless well of possibilities, and each new line of code is a\n" +
            "miracle of creation."
    },
    main_content_2: {
        polish: "Jednakże, w ostatecznym rozrachunku, najważniejszą rzeczą jest sprostanie wymaganiom biznesowym. " +
            "W moich projektach przykładam szczególną uwagę do optymalizacji, niezawodności i stabilności.",
        english: "However, at the end of the day, the most important thing is that the project meets the\n" +
            "business requirements. In my projects, I pay attention to optimization, reliability and stability."
    },
    main_content_3: {
        polish: "Wierzę, że sukces w mojej profesji leży w pisaniu dobrej jakości kodu i stosowaniu strategii: od ogółu do szczegółu.",
        english: "I believe that success in my profession lies in writing good quality code and adopting a\n" +
            "strategy: from general to specific."
    },
    main_content_4: {
        polish: 'I, oczywiście, w ciągłym szlifowaniu umiejętności 😃',
        english: "And constant learning of course 😃"
    }
};


const returnData = (language) => {
    let languageObject = {};

    Object.keys(data).forEach(key => {
        const elem = data[key];
        languageObject[key] = elem[language];
    });

    console.log(languageObject);

    return languageObject;
};

export default returnData;