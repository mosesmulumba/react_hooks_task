import React from "react";

class NewsList extends React.Component{
   constructor(props){
      super(props);
      this.state={value: "Sunday Monitor"}
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChange(event){
      this.setState({
         value: event.target.value
      });
   }
   handleSubmit(event){
      alert("You choose this newspaper : " + this.state.value)
      event.preventDefault();
   }
    
   render(){
      return(
         <form onSubmit={this.handleSubmit}>
            <label className="label--form">
               Pick Your favourite newspaper :
               <select value={this.state.value} onChange={this.handleChange}>
                  <option value="Monday Monitor">Monday Monitor</option>
                  <option value="Bunyoro Paper">Bunyoro Paper</option>
                  <option value="Red Paper">Red Paper</option>
                  <option value="Sunday Monitor">Sunday Monitor</option>
                  <option value="Daily Monitor">Daily Monitor</option>
                  <option value="Kenyan Monitor">Kenyan Monitor</option>
                  <option value="The Independent">The Independent</option>
               </select>
            </label>&nbsp; &nbsp;
            <i><input type="submit" value="Submit" /></i>
         </form>
      );
   }

}

export default NewsList;