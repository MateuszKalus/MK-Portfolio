import React from "react";
import './ProjectWrapper.css'


const ProjectWrapper = ({link}) => {
    return (
        <div className={'project-wrapper'}>
            <div className={'project-wrapper--image'}>
                <img src={link}/>
            </div>
            <div className={'project-wrapper--content'}>
                <p className={'project-wrapper--content__title'}>
                    COVID-Lab
                </p>
                Aplikacja dla laboratorium badającego próbki na obecność koronawirusa. Aplikacja zawiera 3 panele: panel użytkownika,
                panel lekarza oraz pojedynczego zlecenia. Możliwy jest podgląd pojedynczego zlecenia, rejestracja nowych użytkowników, rejestracja nowych zleceń
                oraz aktualizacja wyników w panelu lekarza
            </div>
        </div>
    )
};

export default ProjectWrapper;