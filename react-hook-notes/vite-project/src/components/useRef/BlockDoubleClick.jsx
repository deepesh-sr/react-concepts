import { useEffect, useRef, useState } from "react"

export default function BlockDoubleClick() {

    const isClicked = useRef(false);
    const [count , setCount] = useState(0);


    function handleClick() {
        if (isClicked.current) {
            alert("Pls wait don't click fast , You can click after 3 seconds again")
            return;
        }

        isClicked.current = true;
        console.log("Processing...")

        setCount(count+1)
        setTimeout(() => {
            isClicked.current = false
            console.log("You can click again")
        }, 3000)
    }

    return (
        <>
            <h1>Click the button Below </h1>
            <button onClick={handleClick }>Click Button</button>
            <h3>Button is clicked {count} times.</h3>
            <p>Look at the console for more info</p>
        </>
    )
}