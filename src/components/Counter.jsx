import React, { useCallback, useState } from 'react'
import ComponentA from './ComponentA';

const Counter = () => {
    const[count,setCount] =useState(0);

    const increment =()=>{
        setCount(count+1);
    }

    const handleConsole = useCallback(()=>{
      const handleConsole =()=>{
        console.log('function callback');
      }  
    },[])

    // const handleConsole = ()=>{
    //     console.log('function memorize');//if you write this it will rerender bcoz react will think something changes which is not correct, for that we can use here useCallback.
    // }
  return (
    <div>
      <h2>Counter-{count}</h2>
      <button onClick={increment}>Increment</button>
      <ComponentA handleConsole={handleConsole}/>
    </div>
  )
}

export default Counter
