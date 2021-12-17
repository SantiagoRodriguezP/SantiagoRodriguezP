import React, { useState } from 'react'
import  PropTypes  from 'prop-types';

const CounterApp =({value=10}) => {

    const [counter, setCounter] = useState(value)



    const handleAdd = () =>{
        //setCounter(counter + 1);
        setCounter( (c)=> c+1)}

    const handleRest = () =>{
        setCounter((c) => c-1);
    }

    return (
        <>
          <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={(e) => {handleAdd()}}>+1</button>
        <button onClick={()=> setCounter(value)}>Reset</button>
        <button onClick={() =>  {handleRest()}}>-1</button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;

