import React, { Component } from "react";
import RadioButtons from "../components/RadioButtons";
// import SubmitBtn from "../components/SubmitBtn";
// import { Link } from "react-router-dom";
import "./addition.css"
// import CorrectModal from "../components/CorrectModal";
import divisionprobs2 from "../divisionproblem2.json"
import Timer from "../components/Timer/timer.js";


class DivisionMedium extends Component {
    state = {
        divisionprobs2,
        answer: "?",
        modal: "",
        question: "",
        firstChoice: 0,
        secondChoice: 0,
        thirdChoice: 0,
        fourthChoice: 0,
        correctAnswer: 0,
        correct: 0,
        incorrect: 0,
        attempts: 0
    };



    handleBtnClick = event => {
        console.log(event);
        // this should get the data value of the clicked button
        const btnType = event.target.getAttribute("data-value");
        // console.log(btnType);

        // don't need to set this to state
            this.setState({answer: btnType});
        console.log(this.state.answer);
    }

    checkAnswer = () => {
        const currentAnswer = this.state.answer;
        const correctAnswer = this.state.correctAnswer;
        let correctPoints = this.state.correct;
        let incorrectPoints = this.state.incorrect;
        let failedattempts = this.state.attempts;

        if (currentAnswer === correctAnswer.toString()) {
            correctPoints++;
            this.setState({ modal: "CORRECT!" });
            // can do several things to move on with this page and the correct points and how we want to handle the questions
            // but maybe for now, what we can do is if the answer is correct, add it to the page and then when correct reaches a certain point, we can send the user to a new page
            this.setState({ correct: correctPoints });
        } else {
            if (failedattempts === 1) {
                this.setState({modal: "YOU HAVE RAN OUT OF ATTEMPTS!"});
                incorrectPoints++;
                this.setState({ incorrect: incorrectPoints });
            } else {
                this.setState({modal: "INCORRECT! Try again."});
                failedattempts++;
                this.setState({ attempts: failedattempts })
            }

        }
    };

    submitBtnClick = event => {
        event.preventDefault();
        this.checkAnswer();
        
        // if answer is correct with the submit btn
        // then display the correct modal
        // else 
        // display the incorrect modal
    };

    componentDidMount() {
        // figure out how to assign object in state to value of another object in state
        // this.setState({currentProblem.firstNum: this.state.answers[0].firstNum});
        const random = this.state.divisionprobs2[Math.floor(Math.random() * this.state.divisionprobs2.length)];

        this.setState({ question: random.question});
        this.setState({ 
            firstChoice: random.choices[0], 
            secondChoice: random.choices[1],
            thirdChoice: random.choices[2],
            fourthChoice: random.choices[3]
        });
        this.setState({ correctAnswer: random.correct })
    };

    render() {
        return(
            <div className="maindiv">
                <p className="text-center">{this.state.question}{` = ${this.state.answer}`}</p>

                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value={this.state.firstChoice}
                />
                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value={this.state.secondChoice}
                />
                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value={this.state.thirdChoice}
                />
                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value={this.state.fourthChoice}
                />
                <br />
                <br />
                <br />

                <button
                    onClick={this.submitBtnClick}
                    type="submit"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Submit
                </button>

                <br />
                <br />

                <div id="tally" className="jumbotron">
                    <h1>Correct: {this.state.correct}</h1>
                    <br />
                    <br />
                    <h1>Incorrect: {this.state.incorrect}</h1>
                </div>

                <div>
                <h2> Time Remaining: <Timer time={10} checkAnswer={this.checkAnswer}/> </h2>
                </div>


                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">{this.state.modal}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h3>Your answer was {this.state.answer}.</h3>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

                
                <br />
                <br />
            </div>
        );
    }
}

export default DivisionMedium;