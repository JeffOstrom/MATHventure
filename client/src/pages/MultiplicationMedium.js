import React, { Component } from "react";
import RadioButtons from "../components/RadioButtons";
import { Link } from "react-router-dom";
import "./addition.css"
import multprobs2 from "../multiplicationproblems2.json"
import Timer from "../components/Timer/timer.js";


class MultiplicationMedium extends Component {
    state = {
        multprobs2,
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
        attempts: 0,
        time: 30,
        iterator: 0,
        correcttally: "",
        incorrecttally: "",
        finished: ""
    };



    handleBtnClick = event => {
        // this should get the data value of the clicked button
        const btnType = event.target.getAttribute("data-value");

        this.setState({answer: btnType});
    }

    checkAnswer = () => {
        const currentAnswer = this.state.answer;
        let correctAnswer = this.state.correctAnswer;
        let correctPoints = this.state.correct;
        let incorrectPoints = this.state.incorrect;
        let failedattempts = this.state.attempts;
        const array = this.state.multprobs2;

        correctAnswer = array[this.state.iterator].correct;

        if (currentAnswer === correctAnswer.toString()) {
            correctPoints++;
            if (this.state.iterator === array.length - 1) {
                this.setState({ iterator: 0 });
                this.setState({ answer: "?" })
                this.setState({ 
                    modal: "You have completed this level!",
                    correcttally: "Total Correct: " + correctPoints,
                    incorrecttally: "Total Incorrect: " + incorrectPoints,
                    finished: "Choose your next MATHventure! Or try this level again!"
                });
            } else {
                this.setState({ modal: "CORRECT!" });
                this.setState({ correct: correctPoints });
                this.setState(prevState => {
                    return { 
                        iterator: prevState.iterator + 1,
                        answer: "?", 
                    }
                });
            }
            
            this.setState({ correctAnswer: array[this.state.iterator].correct })
        } else {
            if (failedattempts === 1) {
                this.setState({modal: "YOU HAVE RAN OUT OF ATTEMPTS!"});
                incorrectPoints++;
                this.setState({ incorrect: incorrectPoints });
                this.setState(prevState => {
                    return { 
                        iterator: prevState.iterator + 1,
                        answer: "?", 
                    }
                });
                this.setState({ correctAnswer: array[this.state.iterator].correct })
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
    };

    componentDidMount() {
        const array = this.state.multprobs2;
        this.setState({ correctAnswer: array[this.state.iterator].correct })
    };

    render() {
        const array = this.state.multprobs2;

        return(
            <div className="maindiv">
                <p className="question text-center">{array[this.state.iterator].question}{` = ${this.state.answer}`}</p>

                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value={array[this.state.iterator].choices[0]}
                />
                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value={array[this.state.iterator].choices[1]}
                />
                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value={array[this.state.iterator].choices[2]}
                />
                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value={array[this.state.iterator].choices[3]}
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

                {/* <div id="tally" className="jumbotron">
                    <h1>Correct: {this.state.correct}</h1>
                    <br />
                    <br />
                    <h1>Incorrect: {this.state.incorrect}</h1>
                </div> */}
                <div className="col-8">
                    <Link type="button1" id="buttonLevel" className="btn btn btn-lg btn-block" to="/Mathtype">
                        Choose your MATHventure!
                    </Link>
                </div>
                {/* <div>
                <h2> Time Remaining: <Timer time={10} checkAnswer={this.checkAnswer}/> </h2>
                </div> */}


                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-body">
                            <h3>{this.state.modal}</h3>
                            <h3>{this.state.correcttally}</h3>
                            <h3>{this.state.incorrecttally}</h3>
                            <h3>{this.state.finished}</h3>
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

export default MultiplicationMedium;