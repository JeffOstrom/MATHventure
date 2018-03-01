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
            checkbox: false,
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
        //console.log(this.state.password,this.state.confirmPassword)
        if(this.state.password === this.state.confirmPassword){
            this.setState({passwordsDontMatch:false})
            console.log('they match');
        } else {
            console.log ('they dont match');
            this.setState({passwordsDontMatch:true})
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
                                            
                                            <label htmlFor="password" className="text">Password:
                                                <input 
                                                    name= "password"
                                                    type= "password"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.password}
                                                    style={{border:`solid ${this.state.passwordsDontMatch ? "red" : "grey"} 1px`}}/> 
                                                    
                                            </label>
                                        </div> 

                                        <div className="form-group">
                                            <label htmlFor="confirmPassword" className="text"> Confirm Password:
                                                <input 
                                                    name= "confirmPassword"
                                                    type= "password"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.confirmPassword}
                                                    style={{border:`solid ${this.state.passwordsDontMatch ? "red" : "grey"} 1px`}}/>
                                                    {this.state.passwordsDontMatch ? <h6> Your passwords do not match.</h6> : ""}
                                            </label>
                                        </div>

                                        <div className="form-check">
                                                <label htmlFor="checkbox" className="checkbox" onChange={this.emailConfirm}>Please check this box if the parent would 
                                                like a progress report emailed.
                                                 <input 
                                                    name= "checkbox"
                                                    type= "checkbox"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.checkbox}
                                                    style={{border:`solid ${this.state.passwordsDontMatch ? "red" : "grey"} 1px`}}/>
                                                    {this.state.checkbox ?
                                                        <div className="form-group">
                                                            <label htmlFor="checkbox" className="email">Parents Email address:
                                                                 <input 
                                                                    name= "email"
                                                                    type= "email"
                                                                    onChange={this.handleInputChange}
                                                                    value={this.state.email}/>
                                                            </label>
                                                        </div>
                                                        
                                                        : ""}
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