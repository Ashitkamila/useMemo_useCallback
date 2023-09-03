//This is useMemo tutorial

import React, { useMemo, useState } from 'react'

const ComponentB = () => {
    const[add,setAdd] = useState(0);
    const[substract,setSubstract] = useState(50);
     
    const multiplication = useMemo(
        function multiply() {
            console.log('render multiply function');
            return add*5;
        },[add]
    );
  
  return (
    <div>
    <h1>Count-{add}</h1>
    <h1>Count-{substract}</h1>
    <h1>Count-{multiplication}</h1>
    <button onClick={()=>setAdd(add+1)}>Addition</button>
    <button onClick={()=>setSubstract(substract-1)}>Substraction</button>
    </div>
  )
}

export default ComponentB