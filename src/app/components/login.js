import React from "react" ; 
import ReactDOM from "react-dom" ;

function myfun(e){
   
    console.log("Login clicked ! ") ;
    e.preventDefault() ; 
}

export class Login extends React.Component{

    constructor(props){
        super() ;
    }

    render(){

    return(

        <div className="container">
            <div className="jumbotron p-2 text-center">
                <h1>Login : </h1>
            </div>

            <div className="container loginform">
                <form action="">

                    <div className="row">
                
                    <div className="form-group m-auto">
                        <label htmlFor="email">{"Email : "} </label> 
                        <input className="" type="email" placeholder="Enter Email " minLength="8" required/>
                    </div>
                    </div>

                    <div className="row">
                    <div className="form-group m-auto"><label htmlFor="Password"> Password : </label>
                        <input type="password" name="" id="login-password" minLength="8" placeholder="Password" required/> 
                    </div>
                    </div>

                    <div className="row form-group "><button type="submit" onSubmit={myfun} className="btn btn-primary btn-lg m-auto">Login</button></div>

                </form>
            </div>
        </div>

    ) ; 
  
    }
}
