import React, {Component} from 'react';
class ErrorBoundary extends Component{
   state={
      isErrorOccured:true,
      errorMessage:'error!!'
   }
   componentDidCatch=(error,info)=>{
      this.setState({isErrorOccured:true,errorMessage:error});
   }

   
   render(){
      if(this.state.isErrorOccured){
         return <p>Something went wrong</p>
      }else{
         return <div>{this.props.children}</div>
      }
   }
}
export default ErrorBoundary;