import React from "react"
import {Link}  from "react-router-dom"
import ticket from "./ticket.png"

function Home(){
    return(
        <div>
            {/* <Link to="/">
                <button>Home</button>
            </Link> */}
            <Link to="/SignInEmployee">
             <button className="ms-3 btn btn-warning">Sign in as Employee</button>
            </Link>
            <Link to="/SignInAdmin">
             <button className="ms-3 btn btn-warning">Sign in as Admin</button>
            </Link>
            <Link to="/SignUpEmployee">
             <button className="ms-3 btn btn-warning">Sign up as Employee</button>
            </Link>
            <Link to="/SignUpAdmin">
             <button className="ms-3 btn btn-warning">Sign up as Admin</button>
            </Link>
            <Link to="/RaiseTicket">
                <button className="ms-3 btn btn-warning">Raise Ticket</button>
            </Link>
            <img src={ticket} alt="..."></img>
        </div>
    )
}
export default Home