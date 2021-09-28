import Search from "./Search.js"
import Button from "./Button.js"
import ProjectDetails from "./ProjectDetails.js"
import ProjectList from "./ProjectList.js"
import { useState } from "react"

export default function ProjectDatabase(){
    let[search,setSearch]=useState("");

    return (<div>
ProjectList 
<Search search={search} setSearch={setSearch}    />
<ProjectList searchString={search} />
<ProjectDetails/>

    </div>)
}
