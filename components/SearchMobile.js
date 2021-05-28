import { useRouter } from 'next/router'
import { useState } from "react";

export const SearchMobile = () => {
    const router = useRouter()
    const [search ,setSearch] = useState("")
    return (
      
        <form style={{ paddingLeft: "20px"}}   onSubmit={ (e)=> { e.preventDefault();  if(search){ router.push('Search?search=' + search)} } }  className="form-inline">
              <div className="row" style={{ alignItems:"baseline"}}>
        <div  >

         
                <input type="text"  className="form-control  rounded-pill"
                   onChange={ (e) => setSearch(e.target.value) } name="search"
                    placeholder="Search..."/>

    

    </div>
    &nbsp;
    <div>

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
    </div>
</form>

    )
}
