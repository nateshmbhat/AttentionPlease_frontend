import React from "react" ; 
import ReactDOM from "react-dom" ;


function myfun(e){
    console.log("Login clicked ! ") ;
    
    fetch('localhost:1234/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username : document.getElementById("login_email").value() ,   
          secondParam: document.getElementById("login_password").value()
        })
      })
    e.preventDefault() ; 
}



export class Login extends React.Component{

    constructor(props){
        super() ;
        this.state={
            email : ""  , 
            password : ""
        } ; 
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
                        <input className="" id="login_email" type="email" placeholder="Enter Email " minLength="8" required/>
                    </div>
                    </div>

                    <div className="row">
                    <div className="form-group m-auto"><label htmlFor="Password"> Password : </label>
                        <input type="password" name="" id="login_password" minLength="8" placeholder="Password" required/> 
                    </div>
                    </div>

                    <div className="row form-group "><button type="submit" onSubmit={myfun} className="btn btn-primary btn-lg m-auto">Login</button></div>

                </form>
            </div>
        </div>

    ) ; 
  
    }
}
