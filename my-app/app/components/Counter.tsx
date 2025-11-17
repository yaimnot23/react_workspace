import { useState } from "react";

export default function Counter() {

    // useState(initialState)
    // typeScript
    const [count, setCount] = useState<number>(0);

    
  return <div className="m-3">
    <h1 className="text-2xl font-bold my-5">{count}</h1>
    <button className="px-4 py-2 mr-3 bg-blue-500 text-white rounded-md hover:bg-blue-700" onClick={() =>{setCount(count+1)}}>+</button>
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700" onClick={() =>{setCount(count-1)}}>-</button>
  </div>;

  
}
