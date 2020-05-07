import ErrorBoundary from './ErrorBoundary';
import GetapiComponent from './Api_data/Getapi';
import React from 'react';



class MyComponent extends React.Component{


render(){
    return(


        <ErrorBoundary >

            <GetapiComponent />
        </ErrorBoundary>
    )

}
}


export default MyComponent
