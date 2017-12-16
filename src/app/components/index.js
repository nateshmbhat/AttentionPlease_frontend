import React from "react" ; 
import ReactDOM from "react-dom" ;
import {Login } from "./login" ;

function renderwithid(classobj : obj, element:string)
{
   ReactDOM.render(<classobj.name/> , document.getElementById(element)) ; 
}

renderwithid({name : Login} , "main-view-area") ;
// ReactDOM.render(<Login myname="Natesh"/>, document.getElementById("main-view-area")) ;
