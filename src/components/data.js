import { type } from "@testing-library/user-event/dist/type";
import { useState,useEffect } from "react";

const Data = () =>{
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:4001/contracts")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
   console.log(data)
    return(
        <>
            <h1>Hello Data</h1>
        {data.map(i => (
            <div>
                <h3>{i.service}</h3>
                <p>{i.description}</p>
                <p>{i.location}</p>

            </div>
        ))}
           

        </>
        
    )
}

export default Data;