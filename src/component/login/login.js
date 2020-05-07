import React from 'react';
class LoginComponent extends React.Component {
  constructor(props){
    super(props);
    // this.onRedirect = this.onRedirect.bind(this);

    this.state={useremail:"",userpassword:"",route_data:"" }
    this.noBack()

}
  
noBack() { 
  window.history.forward(); 
}

  mySubmitHandler = (event) => {
    event.preventDefault();
   
   
    console.log(JSON.stringify(this.state))
    let email_value = localStorage.getItem("email")
    let pass_value = localStorage.getItem("password")

    if(email_value == this.state.useremail && pass_value == this.state.userpassword) {
      localStorage.setItem('loginStatus', true);
     
      // this.setState({route_data:"true"})

      this.props.history.push("/front");

    }
      // this.props.history.push("/front");
    


  }

  myEmail = (event) =>{
    let email_value = event.target.value;
    this.setState({useremail:email_value})

}


myPassword = (event) =>{
    let pass_value = event.target.value;
    this.setState({userpassword:pass_value})


}
    render() {
        return (

        <div class="container">
            <h2> Login form</h2>
            <form onSubmit={this.mySubmitHandler}>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={this.myEmail} />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={this.myPassword}/>
              </div>
              <div class="checkbox">
                <label><input type="checkbox" name="remember" /> Remember me</label>
              </div>
                <input type="submit" className="btn btn-primary" />
              
            </form>
        </div>
        )
    }
}


export default LoginComponent