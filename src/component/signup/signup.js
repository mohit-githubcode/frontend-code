import React from 'react';
import { browserHistory } from 'react-router-dom'


class SignupComponent extends React.Component{
    constructor(props){
        super(props);
      

        this.state={username:"", useremail:"",userpassword:"" }
    }
   


    mySubmitHandler = (event) => {
        event.preventDefault();
       
       
        console.log(JSON.stringify(this.state))
        localStorage.setItem("email",this.state.useremail)
        localStorage.setItem("password",this.state.userpassword)

        this.props.history.push("/login")


      }

    myName = (event) =>{
        let name_value = event.target.value;
      
        this.setState({username:name_value})

    }


    myEmail = (event) =>{
        let email_value = event.target.value;
        this.setState({useremail:email_value})

    }


    myPassword = (event) =>{
        let pass_value = event.target.value;
        this.setState({userpassword:pass_value})


    }



render(){
   return (
<div className="container">

   <form onSubmit={this.mySubmitHandler} >
   <h2> Signup form</h2>

        <div className="form-group" >
            <label for="name">Name:</label>
            <input type="text" class="form-control" onChange ={this.myName} />
        </div>

        <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control"  onChange={this.myEmail}/>
        </div>

        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control"  onChange={this.myPassword} />
        </div>
    


        <input type="submit" className="btn btn-primary" />
    </form>
</div>
)
}


}



export default SignupComponent
