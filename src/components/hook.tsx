import { useState } from "react";


const Hook = () => {
    
    const [count, setCount] = useState(0)
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="">Hook</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>CLICK</button>
        </div>
    )
}

export default Hook;