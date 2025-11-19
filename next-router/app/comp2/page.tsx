'use client'

import { useState } from "react"

export default  function Comp2(){

    const [count, setCount] = useState<number>(0);
    return (
        <div className="flex min-h-screen text-center flex-col bg-zinc-900 text-white justify-center p-24">
            <h1 className="text-2xl font-bold my-5">{count}</h1>
            <div className="flex gap-4 justify-center ">
                <button className="px-4 py-2 mr-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                    onClick={() => setCount(count+1)}
                    >
                +
                    </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700" 
                    onClick={() => setCount(count-1)}
                    >
                -
                </button>
                
            </div>
        </div>
    )
}