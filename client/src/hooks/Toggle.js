import { useState } from "react"
 const Toggle = () => {
    const[state, setState] = useState(false)
    const toggle = () => {
        setState((prev) => !prev)
    }
    return [state, toggle] 
}

export default Toggle