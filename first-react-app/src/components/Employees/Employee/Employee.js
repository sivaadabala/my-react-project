import React from 'react'

export default function Employee(props) {
   /*  const parentFunctionCallback = (arg)=>props.nameChangeHandler(arg);//(e.target.value,props.id);
    const localCallback = function (...args){
        return parentFunctionCallback(args);
    } */
    return (

        <div><p>
            Name:<span>{props.name}</span>
            <br />
            Address:<span>{props.address}</span>
        </p>
            {/**<input type='text' value={props.name} onChange={(e)=>{ return props.nameChangeHandler(e,props.name,props.id,props.address)}}/>*/}
            <input type='text' value={props.name} onChange={(e)=>{ return props.nameChangeHandler(e,props.id,e.target.value)}} /> 
            {/**<input type='text' value={props.name} onChange={props.nameChangeHandler.bind(this, props.id)} />*/}
        </div>
    );
}