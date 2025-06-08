import { useEffect, useRef, useState } from "react"

export default function PreviousCounter(){
    
    const [count , setCount] = useState(0);
    const prevCount = useRef(0);
    // useRef comes with an object {current : null}

    useEffect(()=>{
        prevCount.current = count
    },[count])
    

    return(
        <div>
            <h2>Current Count : {count}</h2>
            <h3>Previous Count : {prevCount.current}</h3>
            <button onClick={()=>setCount((c)=>c+1)}>Increment</button>
        </div>
    )
}