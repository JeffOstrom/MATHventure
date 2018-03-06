import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./assets/css/style.css";
import logo from "./assets/images/mv.png"

class returningPlayerForm extends React.Component {

       state={
            name: '',
            userName: '',
            password: '',
            confirmPassword: '',
            checkbox: false,
            email: '',
            passwordsDontMatch: false,
            validation: false,
            button: true
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


    handleSubmit = (event) => {
        event.preventDefault();
        //console.log("hi");
        //console.log(this.state.password,this.state.confirmPassword)
        if(this.state.password === this.state.confirmPassword){
            this.setState({passwordsDontMatch:false})
            //console.log('they match');
        } else {
           //console.log ('they dont match');
            this.setState({passwordsDontMatch:true})
        }

          if (this.state.name !== '' && this.state.userName !== '' && this.state.password !== '' && this.state.password === this.state.confirmPassword){
            this.setState({button: true})
            this.props.history.push("/mathtype");
        } else {
            //console.log ("validation not complete")
            this.setState({button: false})
            //alert("form is not complete")
        }

    }


    emailConfirm= (event)  => {
        event.preventDefault();
        if(this.checkbox = true){
            this.setState({checkbox: true})

        } else {
            this.setState({checkbox: false})
        }
    }



render() {

    return (
            <div>
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                 <h2 className="text-center">Returing Player</h2>
                                    <form className="newplayer-form" onSubmit={this.handleSubmit}>
                                         <div className="form-group">
                                            <label htmlFor="name" className="text">Name:
                                            <br></br>
                                                 <input
                                                    ref= "name"
                                                    placeholder= "name"
                                                    name="name"
                                                    type= "text"
                                                    onChange={this.handleInputChange}                                                   
                                                    value={this.state.name}/>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="userName" className="text">Username:
                                            <br></br>
                                                 <input
                                                    ref= "username"
                                                    placeholder= "username"
                                                    name="userName"
                                                    type= "text"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.userName}/>
                                            </label>
                                        </div>

                                        <div className="form-group">    
                                            <label htmlFor="password" className="text">Password:
                                            <br></br>
                                                <input 
                                                    ref= "password"
                                                    placeholder= "password"
                                                    name= "password"
                                                    type= "password"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.password}
                                                    style={{border:`solid ${this.state.passwordsDontMatch ? "red" : "grey"} 1px`}}/> 
                                                    
                                            </label>
                                        </div> 

                                        <div className="form-group">
                                            <label htmlFor="confirmPassword" className="text"> Confirm Password:
                                            <br></br>
                                                <input 
                                                    placeholder= "confirm password"
                                                    name= "confirmPassword"
                                                    type= "password"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.confirmPassword}
                                                    style={{border:`solid ${this.state.passwordsDontMatch ? "red" : "grey"} 1px`}}/>
                                                    {this.state.passwordsDontMatch ? <h6> Your passwords do not match.</h6> : ""}
                                            </label>
                                        </div>

                                    
                                        <div className="form-check">
                                                <button className="btn btn-login float-right" id="btnSubmit" value ="done">Enter</button> 
                                                        {this.state.button 
                                                            ? ''
                                                        
                                                            : <h6> The form is not completed.</h6>
                                                        
                                                      }
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

export default returningPlayerForm;