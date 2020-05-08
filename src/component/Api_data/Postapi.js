import React from 'react';

import axios from 'axios'
import { Redirect } from 'react-router';

class PostapiComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = { name: '',salary:'',age:'' };
       
// xxxx
    }



    mySubmitHandler = (event) => {
        event.preventDefault();
        // alert("You are submitting " + this.state.user +" " +this.state.email);
        axios.post("http://dummy.restapiexample.com/api/v1/create",this.state)
        .then(response =>{
            console.log(response)
            this.setState({name:"",salary:"",age:""})
            alert("Thank you for submisson")
        })
        .catch(err =>{
            console.log(err)
        })

      }
    myChangeHandler = (event) => {
        // console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value});
      }


    render(){

const {name,salary,age} = this.state
       
        return(
            <form   onSubmit={this.mySubmitHandler}  className="text-cen">


        <p>Enter your name:</p>
            <input
                type='text'
                name="name"
               value={name}
                onChange={this.myChangeHandler}
            />


<p>Enter your salary:</p>
            <input
                type='text'
                name="salary"
                value={salary}
               
                onChange={this.myChangeHandler}
            />

        <p>Enter your age:</p>
            <input
                type='text'
                name="age"
                value={age}

             

                onChange={this.myChangeHandler}
            />
            <br></br>
            <button type="submit">Submit</button>

            </form>
        )



    }

}

export default PostapiComponent