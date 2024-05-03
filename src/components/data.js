import { type } from "@testing-library/user-event/dist/type";
import { useState,useEffect } from "react";

const Data = () =>{
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3000/")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
   console.log(data)
    return(
        <>
            <h1>Hello Data</h1>

           

        </>
        
    )
}

export default Data;