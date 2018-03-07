import React, { Component } from "react";

//Timer
class Timer extends Component {
    state = {
     time: this.props.time

    };
    //only runs once when timer puts on page/starts timer
     componentDidMount() {
       	//Timer countdown function
     	this.timer = setInterval(this.tick,1000);

    };

    //stopping at zero everytime the component updates.
    componentDidUpdate=()=>{
    	if(this.state.time === 0){
    		clearInterval(this.timer);
            this.props.checkAnswer();
           
    	}
	 }

	 //Lifecycle event- Reset the timer when go to the next question/nextProps
	 componentWillReceiveProps = (nextProps) =>{
        //console.log("Will Receive props");
         this.setState({time: nextProps.time});
         clearInterval(this.timer);
         this.timer = setInterval(this.tick, 1000);
     }


    //function 
    tick = ()=>{

    	this.setState({time:this.state.time -1})

    }

    render() {
        return(
        	<span>{this.state.time}</span>


        );
    }
}









export default Timer;
