import { useRouter } from 'next/router'
import { useState } from "react";

export const SearchMobile = () => {
    const router = useRouter()
    const [search ,setSearch] = useState("")
    return (
      
        <form style={{ paddingLeft: "20px"}}   onSubmit={ (e)=> { e.preventDefault();  if(search){ router.push('Search?search=' + search)} } } >
            <div className="row" style={{ alignItems: "center"}} >

  
                <input type="text"  style={{   
                     backgroundColor: "#fff",
                    backgroundClip: "padding-box",
                    border: "1px solid #ced4da",
                    height: "40px",
                    paddingLeft: "10px"
                }}  className="  rounded-pill"
                   onChange={ (e) => setSearch(e.target.value) } name="search"
                    placeholder="Search..."/>

    &nbsp;

        <button className="  btn btn-warning rounded-pill" type="submit">
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
