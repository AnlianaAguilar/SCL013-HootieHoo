import React, { Fragment } from "react";
import HeaderKids from "../Header/ChildrensHeader/Header";
import "./index.css";
import { Link } from "react-router-dom";
//import Reveal from "react-reveal/Fade";
import Girl from "../../img/header/header-girl.png";
import Boy from "../../img/header/header-boy.png";
import Jabier from "../../img/card-button/jabier-jabon.png";
import Mask from "../../img/card-button/mask.png";
import Pencil from "../../img/card-button/pencil.png";
import Play from "../../img/card-button/play.png";
import Paragraph from "../Children/Paragraph";
import "./index.css";
import ButtonLeft from '../Button/ButtonLeft'
import ButtonRightA from '../Button/ButtonRight'

const CardButton = (props) => {
  return (
    <div className="containerCard">
      <img src={props.img} alt="card img" className="imgCardButton" />
    </div>
  );
};

const IndexOfChildren = () => {
  return (
    <Fragment>
      <div className='divContainer'>
          <HeaderKids leftImage={Girl} rightImage={Boy} />
          <Paragraph paragraph={`Aprendamos jugando`} />
          <div className='containerCardButtons'>
            <Link to='/trivia'>
                <CardButton img={Jabier} />
            </Link>
            <Link to='/trivia'>
                <CardButton img={Mask} />
            </Link>
            <Link to='/trivia'>
                <CardButton img={Pencil} />
            </Link>
            <Link to='/trivia'>
                <CardButton img={Play} />
            </Link>
          </div>
      </div>
      <div className='ButtonsLR'>
        <Link to='/'>
          <ButtonLeft/>
        </Link>
        <Link to='/'>
          <ButtonRightA/>
        </Link>
      </div>
    </Fragment>
  );
};

export default IndexOfChildren;
