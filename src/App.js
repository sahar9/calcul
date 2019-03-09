import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
    result:"",
    eq : "",

    }
  }
 
  changevalue =(event) =>{
    const eq = event.target.name ;
    const text = event.target.value ;

this.setState({ eq: eq + text,result : text})
  }

  eg = () => {
    this.setState({eq:eval(this.state.eq),
      result:eval(this.state.eq)})  
    }
    erase = () => {
      this.setState({eq:"",
        result:""
      })  
      }

      num = (event) => {

        const value = event.target.value; 
        this.setState({
eq:this.state.eq+value ,
result : value,

        })
      }
      render() {
    return (
      <div>
      

 
      <table border="1">
      <tr>   <td colSpan="4" > <input type="text" name="rep" class="si1" value={this.state.result}/>  </td>  </tr>
      <tr>  
      
      <td><button  onClick={this.num}className="btn btn-default " value="9">9</button></td>
      <td><button  onClick={this.num}className="btn btn-default " value="8">8</button></td>
      <td><button  onClick={this.num}className="btn btn-default " value="7">7</button></td>
      <td>
      <button  onClick={this.num}className="btn btn-default " value="+" >+</button></td>
      </tr>
     <tr> 
           <td><button  onClick={this.num} className="btn btn-default " value="6">6</button></td>

      <td><button  onClick={this.num} className="btn btn-default "value="5">5</button></td>

      <td><button  onClick={this.num} className="btn btn-default " value="4">4</button></td>


     <td>     <button  onClick={this.num}className="btn btn-default " value="-">-</button></td></tr> 
     
     <tr>
     <td><button  onClick={this.num} className="btn btn-default " value="3">3</button></td>
     <td><button  onClick={this.num}value="2" className="btn btn-default ">2</button></td>
     <td><button  onClick={this.num}value="1"className="btn btn-default ">1</button></td>

     <td>     <button  onClick={this.num} className="btn btn-default "value="*">*</button></td></tr> 

    
     <tr>
     <td ><button  onClick={this.num} className="btn btn-default "value="0">0</button>
     </td>
     <td ><button  onClick={this.erase} className="btn btn-default ">C</button>
     </td>
     <td><button  onClick={this.num}className="btn btn-default "value="/">/</button></td>
     <td><button  onClick={this.eg}className="btn btn-danger ">=</button></td>
     </tr>
     </table> </div>
    );
  }
}

export default App;
