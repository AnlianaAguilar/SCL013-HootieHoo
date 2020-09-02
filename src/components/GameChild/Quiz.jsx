import React, { useState, useEffect } from 'react'
import './Quiz.css';
import { JSONManager } from '../../networking/JSONManager';
import Jump from "react-reveal/Jump";
import Pulse from 'react-reveal/Pulse';
import Paragraph from '../Children/Paragraph';
import YouLost from '../../img/game-result/youlost.png'
import YouWin from '../../img/game-result/youwin.png'
import Star from '../../img/game-result/star.png'
import { useSpeechSynthesis } from 'react-speech-kit'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

Modal.setAppElement('#root')
const paragraph = `Tus respuestas correctas son: `
const arrayRightAnswers = [];


const QuizResult = (props) => {

    return ( 
        <div className='modalItem'>
            <Jump>            
                <Paragraph paragraph={ paragraph + props.gameResult }></Paragraph>           
                { 
                    arrayRightAnswers.shift(),
                    arrayRightAnswers.map((answer) => (
                       <div>
                           <img src={Star} alt={answer}></img>
                       </div>                  
                    ))
                }
                <img src={props.resultImage} alt='jabierResult' />
            </Jump>
        </div>
    );
}
 
const Questions = () => {
    
    const { speak } = useSpeechSynthesis(); 
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ gameState, setGameState ] = useState(true)
    const [ rightAnswers, setRightAnswers ] = useState(0)
    const [ questions, setQuestions ] = useState([])
    const [ questionIndex, setQuestionIndex ] = useState(0)
    const [ currentQuestion, setCurrentQuestion ] = useState(
        {
            id: "",
            description: "",
            answers: []
        }
    )

    // Leer data desde JSONManager
    useEffect(() => {
        JSONManager.getQuestions()
        .then(questions => {
            setQuestions(questions)
            setCurrentQuestion(questions[0])
        })
    }, [])
    
    // Guardo las respuestas correctas, sino continuo con la trivia
    const sendAnswer = (isCorrect) => {
        if ( isCorrect ) {
            setRightAnswers(rightAnswers + 1)
            arrayRightAnswers.push(rightAnswers)
            console.log(arrayRightAnswers);
        }
        if ( questionIndex === questions.length) {
            setGameState(false)
            setIsMenuOpen(true)
            return
        }
     

        setQuestionIndex(questionIndex + 1)
        setCurrentQuestion(questions[questionIndex])
    } 

    // El juego continua si hay respuestas por responder
    if (gameState) {
        return ( 
            <div className='container'>
                <Jump>
                    <div className="containerQuestions">
                        <div key={ currentQuestion.id } > 
                            <div>
                                <button style={{background: 'red', width: '29px'}} onClick={() => speak({ text: currentQuestion.description })}></button>
                                <Paragraph paragraph={currentQuestion.description} ></Paragraph>
                            </div>
                             
                            <div className='containerCardButtonsGame'>
                                { currentQuestion.answers.map(answer => (
                                    <Pulse>     
                                        <div className='containerCardGame'>
                                            <img onClick={() => { sendAnswer(answer.isCorrect) }} className='imgCardButtonGame' src={ answer.img } />
                                        </div>    
                                    </Pulse>                         
                                ))}
                            </div>                                                  
                        </div>
                    </div>
                </Jump>
            </div> 
        );

    // Renderiza según cantidad de respuestas
    } else if (rightAnswers < 3) {
        return (
            <div>      
                <Link to='/niños'>  
                <Modal isOpen={isMenuOpen} onRequestClose={() => setIsMenuOpen(false)} closeTimeoutMS={2000} className='modalStyle'>
                    <QuizResult 
                        gameResult={rightAnswers - 1} 
                        resultImage={YouLost} 
                        className='modalContent'
                    > 
                   
                    </QuizResult>                 
                </Modal>
                </Link>
            </div>
        )
    } else {
     
        return (
            <div>
                <Link to='/niños'>
                <Modal isOpen={isMenuOpen} onRequestClose={() => setIsMenuOpen(false)} closeTimeoutMS={2000} className='modalStyle'>
                <Jump >
                    <QuizResult gameResult={rightAnswers - 1} resultImage={YouWin} className='modalContent'></QuizResult>
                </Jump>
                </Modal>
                </Link>
            </div>
        )
    }
}

export default Questions;