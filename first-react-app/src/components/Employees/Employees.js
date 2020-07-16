import React from 'react'
import Employee from './Employee/Employee'

export default function Employees(props) {
    return (
        <div>
        <Employee name={props.people[0].name} address={props.people[0].address} nameChangeHandler={props.changeName} id={props.people[0].id} />
        <Employee name={props.people[1].name} address={props.people[1].address} nameChangeHandler={props.changeName} id={props.people[1].id} />
        <Employee name={props.people[2].name} address={props.people[2].address} nameChangeHandler={props.changeName} id={props.people[2].id} />
      </div>
    )
}
