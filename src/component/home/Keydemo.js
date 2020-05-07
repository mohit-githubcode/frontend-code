
import React from 'react';
class KeydemoComponent extends React.Component {
    constructor(props){
        super(props);
    
    }

   

    render(){

        const person =[
            {
                id:1,
                name:"john",
                skill:"angular"
                
    
            }
           ,
            {
                id:2,
                name:"cena",
                skill:"react"
            }
        ]
    

        return(
       
            <div>
            <span>{person.map((person) => <h4 key={person.id}>my name is {person.name}  </h4>)}</span>
            <span>{person.map((person) => <h4 key={person.id}>  my name is {person.skill}  </h4>)}</span>





            </div>
            )

      
    }

}


export default KeydemoComponent
