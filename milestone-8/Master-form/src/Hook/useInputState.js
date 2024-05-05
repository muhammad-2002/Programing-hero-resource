// import { useState } from "react"

import { useState } from "react";

// // custom hook
// const useInputHandle =(defaultValue =null)=>{
//     const [value,setValue]= useState(defaultValue)
//     const onChange =(e)=>{
//     setValue(e.target.value)
//     }
//     return {
//         value,
//         onChange
//     }

// }
// export default useInputHandle


export const useInputHandle =(defaultData =null)=>{
    const [value,setValue]=useState(defaultData);
    const onChange=e=>{
        setValue(e.target.value)
    }
    return {
        value:value,
        onChange:onChange
        
    }
}