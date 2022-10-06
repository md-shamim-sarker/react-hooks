import React, {useState} from 'react';

const UseState = () => {
    const [count, setCount] = useState(0);

    const countController = () => {
        setCount(count + 1);
    };

    return (
        <div className='text-center'>
            <h2 className='text-2xl my-4'>Value of Count = {count}</h2>

            <button onClick={() => setCount(count + 1)} className='bg-blue-700 text-blue-100 py-1 px-2 rounded'>Click Me!</button>

            <button onClick={countController} className='bg-blue-700 text-blue-100 p-1 rounded ml-3 py-1 px-2'>Click Me!</button>
        </div>
    );
};

export default UseState;