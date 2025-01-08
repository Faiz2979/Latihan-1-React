import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1)

    let logging = (count: number): void => {
        console.log(count)
    }

    let increase = (count: number): number => {
        logging(count)
        return count + 1
    }
    let decrease = (count: number): number => {
        logging(count)
        return count - 1
    }
    let Square = (count: number): number => {
        logging(count)
        return count + count
    }
    let Root = (count: number): number => {
        logging(count)
        return count / Math.sqrt(count)
    }

    return (
        <div className=''>
            <h1>Counter</h1>
            <h2 className=' font-bold text-4xl'>{count}</h2>
            <span className='p-2 gap-4'>
            <button className=' bg-red-500  mx-2 mt-2 hover:outline outline-white' onClick={() => setCount(Root(count))}>SquareRoot</button>
            <button className=' bg-red-500  mx-2 mt-2 hover:outline outline-white' onClick={() => setCount(decrease(count))}>Decrement</button>
            <button className=' bg-purple-500 mx-2 mt-2 hover:outline outline-white' onClick={() => setCount(count*-1)}>Switch</button>
            <button className=' bg-blue-500 mx-2 mt-2 hover:outline outline-white' onClick={() => setCount(increase(count))}>Increment</button>
            <button className=' bg-blue-500 mx-2 mt-2 hover:outline outline-white' onClick={() => setCount(Square(count))}>Square</button>
            </span>
        </div>
    )
}

export default Counter