import React from "react";
import Link from "next/link";

const Navbar = (props) => {
  return (

    <div   style={{ border: "1px solid gray", padding: "10px", position: "absolute", marginTop: "20px" }}>

{props.category.result.map((val,i) => {

     return( 
       <div>
         <br/>
         <Link href={"/"+ props.category.result[i].category}>
         <div style={{display:"flex",justifyContent:"space-between",maxWidth:"200px" ,cursor:"pointer"}}>
  <a style={{padding:"5px",fontSize:"18px",lineHeight:"30px"}}>{props.category.result[i].category}</a>
      {/* <p style={{borderRadius:"50%",border:"1px solid black",padding:"5px 7px"}}>23</p> */}
     </div>
     </Link>
     </div>
     )})}
    
</div>
 
   
    
   
  );
};

export default Navbar;
