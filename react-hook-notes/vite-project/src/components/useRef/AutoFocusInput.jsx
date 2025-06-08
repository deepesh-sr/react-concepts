import { useRef, useEffect } from "react";

const AutoFocusInput = () => {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <input ref={inputRef} placeholder="I get focused automatically" style={{ border: "2px solid black" }} />
    )
}

export default AutoFocusInput;