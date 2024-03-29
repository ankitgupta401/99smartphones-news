import { useRouter } from 'next/router'
import { useState } from "react";

export const Search = () => {
    const router = useRouter()
    const [search ,setSearch] = useState("")
    return (
     
        <form onSubmit={ (e)=> { e.preventDefault();  if(search){ router.push({
           pathname: '/[pid]' , 
           query: { pid: "Search" , search: search },
        })}} }  >
<div className="row" style={{alignItems:"center"}}>

            <div className=" text-danger ">

                <input type="text" style={{   
                     backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #ced4da",
                    height: "40px",
                    paddingLeft: "10px"
                }}  className=" rounded-pill"
                   onChange={ (e) => setSearch(e.target.value) } name="search"
                    placeholder="Search..."/>

            </div>


        <button className=" text-danger  btn btn-warning rounded-pill" type="submit">
            <i style={
                    {
                        fontSize: "40px",
                        color: "white"
                    }
                }
                className="fa fa-search"></i>
        </button>
        </div>

</form>

    )
}
