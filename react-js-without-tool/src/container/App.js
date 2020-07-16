/**
 * Root Container Component
 */
import React from 'react';


//var element =  React.createElement('h1',null,React.createElement('span',null,'Hello Siva'));
//Creating React Element - above element object is same as below JSX
const element = <h1><span>Hello Siva</span></h1>;

//component: App
//Return the element
function App(){
    //return <h1>Hello Siva</h1>;
    return element;
}

export default App;