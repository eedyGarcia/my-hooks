import {useState} from 'react';
export const useCounter = function(valor=1){
    const [counter, setCounter] = useState(parseInt(valor));
    
    const increment = (factor=1)=>{
        setCounter(counter+factor);
    }

    const decrement = (factor=1)=>{
        setCounter(counter-factor);
    }

    const reset = ()=>{
        setCounter(valor);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}