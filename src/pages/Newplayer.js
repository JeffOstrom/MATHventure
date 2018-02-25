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
            parentsEmail: ''
        };

    //validatePassword = () => if name === 'password'

    handleInputChange = (event) => {
        const {name,value} = event.target;
        const {password } = event.target;
        const {confirmPassword} = event.target;
        const {checkbox} = event.target;
        const {email} = event.target
       // this.validatePassword(name, value)
        this.setState({
            [name]: value,
            [password]: value,
            [confirmPassword]: value,
            [checkbox]: value,
            [email]: value
        });
    }

render(){
    return (
            <div>
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                 <h2 className="text-center">New Player</h2>
                                    <form className="newplayer-form">
                                         <div className="form-group">
                                            <label for="name" className="text">Name:
                                                 <input
                                                    name="name"
                                                    type= "text"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.name}/>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label for="userName" className="text">Username:
                                                 <input
                                                    name="userName"
                                                    type= "text"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.userName}/>
                                            </label>
                                        </div>

                                        <div className="form-group">
                                            <label for="password" className="text">Password:
                                                <input 
                                                    name= "password"
                                                    type= "password"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.password}/>
                                            </label>
                                        </div>

                                        <div className="form-group">
                                            <label for="password" className="text"> Confirm Password:
                                                <input 
                                                    name= "confirmPassword"
                                                    type= "password"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.confirmPassword}/>
                                            </label>
                                        </div>

                                        <div className="form-check">
                                                <label for="checkbox" class="checkbox-inline">Check box if you are over age of 10
                                                 <input 
                                                    name= "checkbox"
                                                    type= "checkbox"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.checkbox}/>
                                                </label>
                                        </div> 

                                        <div className="form-group">
                                                <label for="checkbox" class="email">Parents Email address:
                                                 <input 
                                                    name= "email"
                                                    type= "email"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.email}/>
                                                </label>
                                        </div>
                                        


                                        <div class="form-check">
                                                <label type="button" class="btn btn-login float-right" id="btnSubmit" value = "done">Submit</label>
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