import  React, {Component} from "react";
import './Quiz.css'
import ActiveQuiz from '../../componets/ActiveQuiz/ActiveQuiz'
class Quiz extends Component {

    state = {
        activeQuestion : 0,
        answerState: null, // {[id]: 'suuces' 'erroe'}
        quiz: [
            {
                id:1,
                question : 'Which color',
                rightAnswerId: 2,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Red', id: 3},
                    {text: 'Green', id: 4}
                    ]
            },
            {
                id:2,
                question : 'When Im  born',
                rightAnswerId: 3,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1705', id: 2},
                    {text: '2000', id: 3},
                    {text: '1803', id: 4}
                ]
            }
        ]
    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }


    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        console.log('Answer Id:', answerId);

        const question = this.state.quiz[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            });
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState : null
                    })

                }

                window.clearTimeout(timeout);
            }, 1000);


        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    };

    render(){
        return (
            <div className={'Quiz'}>
                <h1>Answer All</h1>

                <div className={ 'QuizWrapper'}>
                    <ActiveQuiz
                         answers = {this.state.quiz[this.state.activeQuestion].answers}
                         question ={this.state.quiz[this.state.activeQuestion].question}
                         onAnswerClick = {this.onAnswerClickHandler}
                         quizLenght = {this.state.quiz.length}
                         answerNumber = {this.state.activeQuestion+1}
                         state = {this.state.answerState}
                    />
                </div>
            </div>
        )
    }

}

export default Quiz;
