import React from 'react';

export default function Counter(props) {
    return (
        <div>
            <span> Counter : {props.counter}</span>
            <br/>
            <button onClick={props.counterChange}>Increase</button>
        </div>
    );
}
