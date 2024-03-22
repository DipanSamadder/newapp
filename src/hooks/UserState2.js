import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';


function UserState2()  {


    const [count, setCount] = useState(0);

    const handalOnClickDecrement = () => {
      
      setCount((count) => count - 1);
      setCount((count) => count - 1);
      setCount((count) => count - 1);
    }
    const handalOnClickIncrement = () => {
      setCount((count) => count+1);
      setCount((count) => count+1);
      setCount((count) => count+1);
    }

    return (
      <div>
        <h1>Count : { count }</h1>
        <Button onClick={handalOnClickIncrement}>+</Button> 
        <Button onClick={handalOnClickDecrement}>-</Button>
      </div>
    )
 
}
export default UserState2;
