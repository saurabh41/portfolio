import React, { Component } from "react";
import fire from "./fire";


class Contact extends Component{
state ={
  text:""
}
handleText=e=>{
  this.setState ({
    text : e.target.value
  })
}
handleSubmit=e=>{
  let messageRef= fire.database().ref('messages').orderByKey().limitToLast(100)
  fire.database().ref('messages').push(this.state.text);
  this.setState({
    text: ""
  })
}

render() {
    return (
        <>
        <div className="containerC">
       
        <h2>contact me</h2>
         <input type="text" id="inputText" onChange={this.handleText}/>
        
      <input type="text" id="inputText" onChange={this.handleText}/>
      <textarea type="text" id="#btnclicks" onChange={this.handleText}/>
      <br/>
      <button onClick={this.handleSubmit}>save</button>
        </div>
        
        </>
    );
}
}

export default Contact;
