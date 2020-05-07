import React from 'react';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";

class FrontComponent extends React.Component {

constructor(props){

    super(props);
    this.noBack();

   this.onchange=this.onchange.bind(this)
}

noBack() { 
  // this method block browser back button
  window.history.forward(); 
}

state={
  loading:true,
  person:[],
  status:null,
  activePage: 1,
  itemPerPage:5,
  socialMediaList:[],
  indexOfLastTodo:0,
  indexOfFirstTodo:0,
}



handlePageChange(pageNumber) {
// handle active state of page !!
  
  this.setState({activePage: pageNumber});
  this.state.indexOfLastTodo = pageNumber * this.state.itemPerPage;
  this.state.indexOfFirstTodo = this.state.indexOfLastTodo - this.state.itemPerPage;
  var sliced=this.state.socialMediaList.slice(this.state.indexOfFirstTodo,this.state.indexOfLastTodo);
  this.setState({person:sliced})

}





dataPagination(){
// This methode is used to get data on first page!!

  this.state.indexOfLastTodo = this.state.activePage * this.state.itemPerPage;
  this.state.indexOfFirstTodo = this.state.indexOfLastTodo - this.state.itemPerPage;
  var sliced=this.state.socialMediaList.slice(this.state.indexOfFirstTodo,this.state.indexOfLastTodo);
  this.setState({person:sliced})

}




async componentDidMount(){
// called after component is rendered same as ngOnInit
 
  const url = "http://dummy.restapiexample.com/api/v1/employees";
  const response = await fetch(url);
  const data =await response.json();
  this.state.socialMediaList=data.data
  this.dataPagination()
}


landNavigate(k){

  this.props.history.push("/land/" +k)
  

}


onchange(e){
  let serach_text=e.target.value

  if(e.target.value.length == 0){
  this.dataPagination()
}
else{
  const filteredCountries = this.state.socialMediaList.filter( country =>{
    return country.employee_name.toLowerCase().indexOf(serach_text.toLowerCase() ) !== -1
})
this.setState({person:filteredCountries})


}



}

render()
{
  
          return (
            <div>
                  {/* { this.state.loading ? <div className="before-load">loading ...</div> :  */}

            
             <div class="container">
            
             {/* <input type="text" id="myInput" onChange={this.myFunction} placeholder="Search for names.." title="Type in a name" /> */}
             {/* onChange={this.myFunction} */}
             {/* <input type="text" placeholder="search here...." onChange={this.onchange}/> */}
               
               
              <form class="example">
              <input type="text" placeholder="search here...." onChange={this.onchange}/>
            
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
               <h4>Employee salary table</h4>
             
               <table class="table" id="my">
                  <thead>
                   <tr>
                      <th>Firstname</th>
              
                      <th>salary</th>
            
            
                    </tr>
                  </thead>
                  <tbody >
                      <tr >
                        <td >{this.state.person.map((s)=><li>{s.employee_name}</li>)}</td>
                  
                        <td>{this.state.person.map((s)=><li>{s.employee_salary}</li>)}</td>
                        <td></td>
                      </tr>
                    
                    
                  </tbody>
                 </table>
            
                 
            
               </div>
             <button type="button" class="btn btn-secondary"  onClick={() => this.landNavigate('123')}>Navigate</button>
             
            
             <div>
                   <Pagination itemClass="page-item" linkClass="page-link"
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.person.length}
                      totalItemsCount={450}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange.bind(this)}
                    />
                  </div>
             </div>
            
            
          )
      // });
     
      
      
}


}


export default FrontComponent
