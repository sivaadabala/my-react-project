import React, { Component } from 'react';
import Employees from '../../components/Employees/Employees';

class App extends Component {

  constructor() {
    super();
    //this.changeNameHandler = this.changeNameHandler.bind(this);
    this.state = {
      counter: 0,
      people: [
              { name: 'siva1', address: 'address1', id: 1 },
              { name: 'siva2', address: 'address2', id: 2 }, 
              { name: 'siva3', address: 'address3', id: 3 }
      ]
    };
  }




  changeNameHandler = (event,id, newName) => {
   /*  console.log(id+"   "+newName+"  "+event);
    //  const found = this.people.find((p) => p.id === id);
    // found.name = newName;
    // console.log(found); 
    this.setState({
      people: [
        { name: 'siva11', address: 'address1', id: 1 },
        { name: 'siva22', address: 'address2', id: 2 }, 
        { name: 'siva33', address: 'address3', id: 3 }
      ]
    }); */

    this.setState(
      (prevState)=>{
      const found = prevState.people.find((p) => p.id === id);
      
      const newPerson = {...found};
      newPerson.name=newName;
      const index = prevState.people.findIndex((p)=>p.id===id);
      prevState.people[index] = newPerson;
      return {
        people: prevState.people
      }
    },()=>console.log(this.state.people)
    );
  }

  render() {
    return (
      <div>
        <Employees people={this.state.people} changeName={this.changeNameHandler}/>
      </div>
    )
  }
}
export default App;
