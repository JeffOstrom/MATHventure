import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./assets/css/style.css";
import logo from "./assets/images/background.svg"
import axios from 'axios';


class newPlayerForm extends React.Component {

       state={
            name: '',
            userName: '',
            password: '',
            confirmPassword: '',
            checkbox: false,
            email: '',
            passwordsDontMatch: false,
            passwordLength: '',
            validation: false,
            button: true
        };



    handleInputChange = (event) => {
        const {name,value} = event.target;

        let passwordLength
        if (name === "password"){
            passwordLength > 6 
            console.log ( "password not long enough")
        } else {
            console.log ( "password ok")
        }

        let passwordsDontMatch
        if (name === "password"){
            passwordsDontMatch = value !== this.state.confirmPassword
        } else if (name === "confirmPassword"){
            passwordsDontMatch = value !== this.state.password
        }
    
        this.setState({
            [name]: value,
            passwordsDontMatch,
            passwordLength
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

    // Method that handles the save user button. This is the submit button.
    handleUserSave = () => {
        axios.post('/api/users', {
            name: this.state.name,
            username: this.state.userName,
            password: this.state.password
        }).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    };

render() {

    return (
            <div>
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                 <h2  id = "title" className="text-center">New Player</h2>
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
                                                    minlength = "6"
                                                    maxlength = "100"
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
                                                    minlength = "6"
                                                    maxlength = "100"
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
                                                                    placeholder= "parent@email.com"
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
                                                <button type='submit' className="btn btn-login float-right" id="btnSubmit" onClick={this.handleUserSave} value ="done">Register Player</button> 
                                                        {this.state.button 
                                                            ? ''
                                                        
                                                            : <h6> The form is not completed.</h6>
                                                        
                                                      }
                                        </div>
  
                                    </form>
                                </div>
                                        <div className="col-md-8 banner-sec">
                            <img id="logoFormNP" src={logo} alt="mathventure"></img>
                   </div>
               </div>
            </div>
       </section>
    </div>
 );
}
}

export default newPlayerForm;