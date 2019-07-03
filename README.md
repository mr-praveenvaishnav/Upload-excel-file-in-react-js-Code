# login-form-reactjs

declare 
setp -1  

install mdbreact  then improt file  

          import React from "react";
          import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact'; 


Step -2   declare  state 
  this.state = {
    Email : '',
    password : '',
    errors : {
      Email : '',
      password : '',
    },
    formIsValid: true,
    redirect: false
  }
  };
  
  
  setp-3   declare  Function 
  
   submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    console.log("test ",  event.target.value )
    this.setState({ [event.target.name]: event.target.value });
  };

  onChange(e){
    this.setState({[e.target.name] : e.target.value});
   console.log(this.state);
}  

validateForm() {
  let Email = this.state.Email; 
  let password = this.state.password;
  let errors = {};
  let formIsValid = true;
  
 
  if (!Email) {
  
    formIsValid = false;
    errors["Email"] = "*Please enter your email-ID.";
  }
  if (!password) {
    formIsValid = false;
    errors["password"] = "*Please enter your email-ID.";
  }
  return formIsValid; 
}

UserLogin(){
  let tests =  this.validateForm()
   if(this.validateForm()){
     if(this.state.Email && this.state.password){
         PostData('login', this.state).then((result) =>
         {
             let responseJson = result.result;
             if(responseJson == true){
                 sessionStorage.setItem('userData', responseJson);
                 this.setState({redirect: responseJson});
             }
             else{
                 alert('user is wrong please check');
                 this.setState({ 
                  Email : '',
                  password : '',
                });
                 
               //  console.log('Login Error');
             }
         })
     }
 }
else {
//alert('fill form')
}    
} 





setp-4  input field 
 return (
      <MDBContainer>
      <MDBRow>
      <MDBCol md="3">
      </MDBCol>
        <MDBCol md="6">
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/Photos/Others/background.jpg)",
              width: "28rem"
            }}
          >
            <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-weight-bold">
                  <strong></strong>
                  <a href="./" className="green-text font-weight-bold">
                    <strong> Login</strong>
                  </a>
                </h3>
              </div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
         
              <MDBInput
                value={this.state.Email}
                onChange={this.changeHandler}
                type="Email"
                id="materialFormRegisterConfirmEx3"
                name="Email"
                label="Email ID"
                required
              >
               <div className="invalid-feedback">
                  Please provide a valid Email.
                </div>
                <div className="valid-feedback">Looks good!</div>
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
    
              <MDBInput
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                id="materialFormRegisterPasswordEx4"
                name="password"
                label="password"
                required

                id="floating-password"
                label="Enter your password"
                type="password"
                className="md-cell md-cell--bottom"
                >
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
             
           
         
             
          <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                <MDBBtn onClick={this.UserLogin.bind(this)} color="success" 
                rounded
                // type="button"
                className="btn-block z-depth-1"
                
                type="submit">
          Sign in
          </MDBBtn>
                </div>
              </MDBRow>
        </form>
       
        <div className="md-form pb-3">
                <div className="form-check my-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck17"
                  />
                  <label
                    className="form-check-label white-text"
                    htmlFor="defaultCheck17"
                  >
                    Accept the
                    <a href="#!" className="green-text font-weight-bold">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
         
              <MDBCol md="12">
                <p className="font-small white-text d-flex justify-content-end">
                  Have an account?
                  <a href="#!" className="green-text ml-1 font-weight-bold">
                    Log in
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="3">
      </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
    
  
