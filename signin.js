import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebaselogin"
import React, { useState } from "react"


function Sign_page({enterUser}){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    function handleSubmit(event){
        event.preventDefault()
        if(!email||!password)
        {
            return
        }
        enterUser(email,password)
        setEmail("")
        setPassword("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <label for="email">Enter your Work Email</label>
            <input type="email" value={email} placeholder="Email" onChange={
                e => setEmail(e.target.value)} id="email" required>
            </input>
            <label for="password">Enter your Password</label>
            <input type="password" value={password} placeholder="Password" onChange={
                e => setPassword(e.target.value)} id="password" required>
            </input>
            <button>Sign In</button>
        </form>
    )
}
function Signin(){
    function enterUser(email,password)
    {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user.email)
          
          // ...
        })
        .catch((error) => {
          alert("UH Oh!!!!")
          console.log(error)
        });
    }
    return(
        <div>
            <Sign_page enterUser={enterUser}/>
        </div>
    )
}
export default Signin