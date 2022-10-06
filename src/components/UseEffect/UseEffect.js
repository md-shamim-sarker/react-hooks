import React, {useEffect, useState} from 'react';

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [shamim, setShamim] = useState(10);

    useEffect(() => {
        console.log("No Dependency Array!");
    });

    useEffect(() => {
        console.log("Empty Dependency Array!");
    }, []);

    useEffect(() => {
        console.log("Have Dependency Array!");
    }, [count]);

    const buttonHandler = () => {
        setShamim(shamim + 1);
    };

    const buttonHandler2 = () => {
        console.log('Hello Shamim!');
    };

    return (
        <div className='text-center my-5'>
            <h2 className='text-2xl font-bold'>The value of count = {count}</h2>

            <button onClick={() => setCount(count + 1)} className='bg-blue-700 text-blue-100 py-1 px-2 rounded'>Click Me!</button>

            <button onClick={buttonHandler} className='bg-blue-700 text-blue-100 py-1 px-2 rounded ml-5'>Click Me!</button>

            <button onClick={buttonHandler2} className='bg-blue-700 text-blue-100 py-1 px-2 rounded ml-5'>Click Me!</button>

        </div>
    );
};

export default UseEffect;