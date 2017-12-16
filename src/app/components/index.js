import React from "react" ; 
import ReactDOM from "react-dom" ;
import { BrowserRouter, Route } from 'react-router-dom'
import {Login } from "./login" ;
import {Router , browserHistory} from "react-router" ;


function renderwithid(classobj : obj, element:string)
{
   ReactDOM.render(<classobj.name/> , document.getElementById(element)) ; 
}

<BrowserRouter history={browserHistory}>
    <Route path={"/"} component={Login} ></Route>
</BrowserRouter>

renderwithid({name : Login} , "main-view-area") ;
// ReactDOM.render(<Login myname="Natesh"/>, document.getElementById("main-view-area")) ;
