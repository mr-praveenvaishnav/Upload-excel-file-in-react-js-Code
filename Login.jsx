import React from "react";
import {PostData} from './sesionstart';
import  { Redirect } from 'react-router-dom';
import logo from '../images/DXC.png';
import "./login.css";
import {MDBBtn,  MDBInput } from 'mdbreact';
class Login extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    UserName : '',
    Password : '',
    datavalue: '',
    errors : {
      UserName : '',
      Password : '',
    },
    formIsValid: true,
    redirect: false
  }
  };
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onChange(e){
    this.setState({[e.target.name] : e.target.value});
}  
validateForm() {
  let UserName = this.state.UserName; 
  let Password = this.state.Password;
  let errors = {};
  let formIsValid = true;
  if (!UserName) {
    formIsValid = false;
    errors["UserName"] = "*Please enter your UserName-ID.";
  }
  if (!Password) {
    formIsValid = false;
    errors["Password"] = "*Please enter your UserName-ID.";
  }
  return formIsValid; 
}

UserLogin(){
   if(this.validateForm()){
     if(this.state.UserName && this.state.Password){
         PostData('login', this.state).then((result) =>
         {
             let responseJson = result.login;
             let responseJsondata = result.result;
             let active = result.result;
             let activedata = active.split(',');
             let activeuser = activedata[4];
             if(responseJson == true){
              if(activeuser == true || activeuser == "True"){
                window.sessionStorage.setItem('userData', responseJsondata);
                this.setState({redirect: responseJson});
              }else{
                alert('This User is Disabled Please contact Admin');
                this.setState({ 
                 UserName : '',
                 Password : '',
               });
              }
             
             }
             else{
                 alert('Check UserName/Password ');
                 this.setState({ 
                  UserName : '',
                  Password : '',
                });
             }
         })
     }
 }
else {
//alert('fill form')
}    
} 

  render() {
    if(this.state.redirect){
      return(<Redirect to='/'/>)
  }
    return (<React.Fragment>
      <div className="logologin">
      <a className="LOGINLOGO" href="www.dxc.com">
        <img className="imagelogo" src={logo}/>
      </a>
        </div>
      <div className="main">
        <div className="container">
          <center>
            <div className="middle">
        <div id="login">     
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
        <fieldset className="clearfix">
      <p>
      <MDBInput className="loginwidth"
                onChange={this.changeHandler}
                type="UserName"
                id="materialFormRegisterConfirmEx3"
                name="UserName"
                Placeholder="Enter User Name"
                required
              >
               <div className="invalid-feedback">
                  Please provide a valid User Name.
                </div> 
              </MDBInput>
      </p> 
                    <p>
                    <MDBInput className="loginwidth"
                onChange={this.changeHandler}
                type="Password"
                id="materialFormRegisterPasswordEx4"
                name="Password"
                Placeholder="Enter Password"
                required
                >
                <div className="invalid-feedback">
                  Please provide a valid Password.
                </div>
              </MDBInput>
             
                    
                    
                    </p> 
                    <div>
                      <span style={{width: '48%', textAlign: 'left', display: 'inline-block'}}><a className="small-text" href="#">Forgot
                          password?</a></span>
                      <span style={{width: '50%', textAlign: 'right', display: 'inline-block'}}>
                      
                      
                      <MDBBtn onClick={this.UserLogin.bind(this)} color="success" 
                rounded  className="btn-block z-depth-1" type="submit">
          Sign in
          </MDBBtn>
                      
                      
                      </span>
                    </div>
                  </fieldset>
             
    
        </form>
       
                <div className="clearfix" />
              </div> {/* end login */}
       
            </div>
          </center>
        </div>
      </div>
   
      </React.Fragment>
  );
  }
}

export default Login;