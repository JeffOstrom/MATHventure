import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./assets/css/style.css";
import logo from "./assets/images/mv.png"

class newPlayerForm extends React.Component {

       state={
            name: '',
            userName: '',
            password: '',
            confirmPassword: '',
            checkbox: '',
            email: '',
            passwordsDontMatch: false
        };

    // validatePassword = () => {
    //     if name === 'password'

    handleInputChange = (event) => {
        const {name,value} = event.target;
        let passwordsDontMatch
        if (name === "password"){
            passwordsDontMatch = value !== this.state.confirmPassword
        } else if (name === "confirmPassword"){
            passwordsDontMatch = value !== this.state.password
        }


        this.setState({
            [name]: value,
            passwordsDontMatch
        });
    }


    passwordMatch = (event) => {
        event.preventDefault();
        //console.log("hi");
        console.log(this.state.password,this.state.confirmPassword)
        if(this.state.password === this.state.confirmPassword){
            this.setState({passwordsDontMatch:false})
            console.log('they match');
        } else {
            console.log ('they dont match');
            this.setState({passwordsDontMatch:true})
        }
    
    }  

    // if(this.state.password == this.state.confirmPassword){
    //     console.log('they match');
    //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        //confirmPassword.style.backgroundColor = goodColor;
        //message.style.color = goodColor;
        // message.innerHTML = "Passwords Match!"
         // }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        //confirmPassword.style.backgroundColor = badColor;
        //message.style.color = badColor;
        // message.innerHTML = "Passwords Do Not Match!"
        // }
    // checkStatusLimit = (event) => {
    //     const {status} = event.target.value.trim();

    //     if(status.length >= 140){
    //          React.findDOMNode(this.refs.status).value = status.substr(0,140);
    //         event.preventDefault();
    //         //trigger error 
    //         console.log('aah.. Status is not a story!')
    //     }
    //  }

    //  submitForm = (event) =>{
    //     event.preventDefault();
    //     // Dispatch an action or make an Ajax call to server using the state.
    // }




render() {

    return (
            <div>
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                 <h2 className="text-center">New Player</h2>
                                    <form className="newplayer-form" onSubmit={this.passwordMatch}>
                                         <div className="form-group">
                                            <label htmlFor="name" className="text">Name:
                                                 <input
                                                    name="name"
                                                    type= "text"
                                                    onChange={this.handleInputChange}                                                   
                                                    value={this.state.name}/>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="userName" className="text">Username:
                                                 <input
                                                    name="userName"
                                                    type= "text"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.userName}/>
                                            </label>
                                        </div>

                                        <div className="form-group">
                                            {this.state.passwordsDontMatch ? <h1> Oh No </h1> : ""}
                                            <label htmlFor="password" className="text">Password:
                                                <input 
                                                    name= "password"
                                                    type= "password"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.password}
                                                    style={{border:`solid ${this.state.passwordsDontMatch ? "red" : "lime"} 2px`}}/> 
                                                    
                                            </label>
                                        </div> 

                                        <div className="form-group">
                                            <label htmlFor="confirmPassword" className="text"> Confirm Password:
                                                <input 
                                                    name= "confirmPassword"
                                                    type= "password"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.confirmPassword}
                                                    style={{border:`solid ${this.state.passwordsDontMatch ? "red" : "lime"} 2px`}}/>
                                            </label>
                                        </div>

                                        <div className="form-check">
                                                <label htmlFor="checkbox" className="checkbox-inline">Check box if you are over age of 10
                                                 <input 
                                                    name= "checkbox"
                                                    type= "checkbox"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.checkbox}/>
                                                </label>
                                        </div> 

                                        <div className="form-group">
                                                <label htmlFor="checkbox" className="email">Parents Email address:
                                                 <input 
                                                    name= "email"
                                                    type= "email"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.email}/>
                                                </label>
                                        </div>
                                        


                                        <div className="form-check">
                                                <button className="btn btn-login float-right" id="btnSubmit" value = "done">Submit</button>
                                        </div>
                                        
  
                                    </form>
                                </div>
                                        <div className="col-md-8 banner-sec">
                            <img id="logo" src={logo} alt="mathventure"></img>
                   </div>
               </div>
            </div>
       </section>
    </div>
 );
}
}

export default newPlayerForm;