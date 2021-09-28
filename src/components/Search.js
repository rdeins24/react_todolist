import Button from "./Button";
import { useState } from "react";

export default function Search({search,setSearch}){

//controled input =>lift up=>pass state to lift and searcxh input  (pass handle chnge function)



    return (
 <div>
     <input 
     type="text"
      name="search" 
      placeholder="type to search a project" 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    
      />
      <p>{search}</p>
     <Button text='press to search' bg='red'/>
 </div> )
       }