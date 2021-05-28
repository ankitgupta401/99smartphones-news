import { useRouter } from 'next/router'
import { useState } from "react";

export const Search = () => {
    const router = useRouter()
    const [search ,setSearch] = useState("")
    return (
        <form onSubmit={ (e)=> { e.preventDefault();  if(search){ router.push('Search?search=' + search)} } }  className="form-inline">
        <div  className="col-md-9 ">

            <div className=" text-danger ">

                <input type="text"  className="form-control  rounded-pill"
                   onChange={ (e) => setSearch(e.target.value) } name="search"
                    placeholder="Search..."/>

            </div>

    </div>
    <div className=" col-md-2">

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
