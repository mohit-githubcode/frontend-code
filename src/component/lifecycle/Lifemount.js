import React from 'react';
class LifemountComponent extends React.Component {
    constructor(props){
        super(props);

    this.state = {favoritecolor : "red"}    
    console.log("const")
    }




    // call before render
    // static getDerivedStateFromProps(props, state) {
    //     console.log("getderived")
    //     return {favoritecolor: props.favcol };
    //   }


      componentDidMount(){

        console.log("componentdid")
setTimeout( ()=> {
this.setState({favoritecolor:"green"})},1000)


      }

    render(){
        console.log("return")

    return <div>{this.state.favoritecolor}</div>
    }

}


export default LifemountComponent
