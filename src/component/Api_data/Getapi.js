import React from 'react';

import axios from 'axios'

class GetapiComponent extends React.Component{
    constructor(props){
        super(props);

        this.state={gets : []}
    }
   

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response =>{
            console.log(response)
            this.setState({gets:response.data})
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render(){
        return (
    <div>
        <h5><b>Title</b></h5>
       <h3>{this.state.gets.map(res =><li key={res.id}>{res.title}</li>)}</h3>

    </div>

        )
    }

}

    export default GetapiComponent
