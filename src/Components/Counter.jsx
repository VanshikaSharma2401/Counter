import React, { useState } from 'react'

const Counter = () => {
    const [initialValue,setInitialValue]=useState(0)
  return (
    <div>
      <div>
        Count: {initialValue}
      </div>
      <div>
        <button onClick={()=>setInitialValue(initialValue+1)}>Increment</button>
        <button onClick={()=>setInitialValue(initialValue-1)}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
