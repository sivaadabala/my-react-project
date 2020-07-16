import React from 'react';
import Employee from '../../components/Employee/Employee';

const App = () => {
  const people = [{ name: 'siva1', address: 'address1', id: 1 },
  { name: 'siva2', address: 'address2', id: 2 }, { name: 'siva3', address: 'address3', id: 3 }];

  /* function changeName(e, ...args) {
    console.log(args);
    console.log(e);
  } */
  const changeName = (id, newName) => {
    console.log(newName);
    const found = people.find((p) => p.id === id);
    found.name = newName;
    console.log(found);
  }

  return (
    <div>
      <Employee name={people[0].name} address={people[0].address} nameChangeHandler={changeName} id={people[0].id} />
      <Employee name={people[1].name} address={people[1].address} nameChangeHandler={changeName} id={people[1].id} />
      <Employee name={people[2].name} address={people[2].address} nameChangeHandler={changeName} id={people[2].id} />
    </div>
  )
};
export default App;
