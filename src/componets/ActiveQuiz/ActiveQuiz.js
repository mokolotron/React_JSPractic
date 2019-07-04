import React from 'react'
import './ActiveQuiz.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuize = props =>{
    return(
        <div className={'ActiveQuiz'}>
            <p className={'Question'}>
          <span>
            <strong>2.</strong>&nbsp;
              {props.question}
          </span>

                <small>{props.answerNumber} из {props.quizLenght}</small>


            </p>
            <AnswersList
                state = {props.state}
                answers = {props.answers}
                onAnswerClick = {props.onAnswerClick}

            />
        </div>
    )
};

export default ActiveQuize

