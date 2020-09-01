import React from "react";
import { Link } from 'react-router-dom'
import { BackButton } from '../PaintChildren/MenuPaint'
import Fade from "react-reveal/Fade";
import HeaderKids from '../Header/ChildrensHeader/Header';
import AngryCrown from '../../img/header/covid-corona.png';
import Jabier from '../../img/header/header-jabier.png';
import Questions from "../GameChild/Quiz";

const Children = () => {

  return (
    <div className='divContainer'>
      <HeaderKids leftImage={AngryCrown} rightImage={Jabier} />
      <Fade>
        <Questions></Questions>
      </Fade>
      <Link to='/Niños'>
          <BackButton></BackButton>
      </Link>
    </div>
  );
};

export default Children;
