import React,{ useContext } from "react";
import { ToggleTheme } from "../App";
import { useEffect,useState } from "react";
function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState("");
  

  useEffect(()=>{
    alert(`comment button clicked `)
  },[comment])

 const commentGet = ()  =>{
   if(comment === ""){
    setComment("uhxw hw  ionk lk    nqoink qlnqnl xonxk ql oi xxlkk qknx ql oi l kok lkn")
   }
   else{
    setComment("")
   }
 }

  return(
    <div style={themeStyle}>
            <h3>{like}</h3>
     
            <h1>{comment}</h1>
     <button onClick={()=>setLike(like=>like+1)}>Like</button>
     <button  onClick={commentGet}>Comment</button>
    
    </div>
  )
}

export default UseContext;