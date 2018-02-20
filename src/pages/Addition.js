import React, { Component } from "react";
import RadioButtons from "../components/RadioButtons";
import SubmitBtn from "../components/SubmitBtn";
import { Link } from "react-router-dom";


class Addition extends Component {
    state = {
        firstNum: 5,
        secondNum: 5,
        operation: "-",
        answer: "?",
        problems: [
            {
                firstNum: 4,
                secondNum: 7,
                operation: "+",
                answers: [11, 28, 3, 0]
            },
            {
                firstNum: 8,
                secondNum: 2,
                operation: "*",
                answers: [16, 10, 6, 0]
            }
        ],
        currentProblem: {

        }
    };



    handleBtnClick = event => {
        console.log(event);
        // this should get the data value of the clicked button
        const btnType = event.target.getAttribute("data-value");
        // console.log(btnType);

        // don't need to set this to state
            this.setState({answer: btnType});
    }

    submitBtnClick = event => {
        const answer = event.target.getAttribute("data-value");
        
        if (answer === "10") {
            <Link to="/correct"></Link>
        } else {
            <Link to="/incorrect"></Link>
        }
    }

    componentDidMount() {
        // figure out how to assign object in state to value of another object in state
        // this.setState({currentProblem.firstNum: this.state.answers[0].firstNum});
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <p className="text-center"><span data-numberone={this.state.firstNum}>{this.state.firstNum}</span> {this.state.operation} <span data-numbertwo={this.state.secondNum}>{this.state.secondNum}</span>{` = ${this.state.answer}`}</p>

                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value="10"
                />
                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value="1"
                />
                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value="0"
                />
                <RadioButtons
                    handleClick={this.handleBtnClick}
                    data-value="101"
                />

                <br />
                <br />
                <br />
                <SubmitBtn 
                    submit={this.submitBtnClick}
                />

            </div>
        );
    }
}

export default Addition;