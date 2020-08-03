import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/images/logo.svg'
import landingLogo from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={imgLogo} alt="Logo Proffy"/>
          <h2>Sua plataforma de estudos on-line</h2>
        </div>

        <img 
          src={landingLogo} 
          alt="Logo Landing" 
          className="hero-image"/>

          <div className="buttons-container">
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar"/>
              Estudar
            </Link>
            <Link to="/give-classes" className="give-classes">
              <img src={giveClassesIcon} alt="Dar aulas"/>
              Dar aulas
            </Link>
          </div>

          <span className="total-connections">
            Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Purple Heart"/>
          </span>
      </div>
    </div>
  );
}

export default Landing;