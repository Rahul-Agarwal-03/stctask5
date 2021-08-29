import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import {db} from "./firebase"
import {auth} from "./firebaselogin"


function Login_page({ addUser }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    function handleSubmit(event) {
        event.preventDefault()
        if (!email || !password) {
            return
        }
        addUser(email, password, confirmPassword)
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label for="email">Enter your Work Email</label>
            <input type="email" value={email} placeholder="Email" onChange={
                e => setEmail(e.target.value)} id="email" required>
            </input>
            <label for="password">Enter your Password</label>
            <input type="password" value={password} placeholder="Password" onChange={
                e => setPassword(e.target.value)} id="password" required>
            </input>
            <label for="confirm_password">Please Enter your Password again</label>
            <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={
                e => setConfirmPassword(e.target.value)} id="confirm_password" required>
            </input>
            <button>Add User</button>
        </form>
    )

}
function Login(){
    function addUser(email,password,confirmPassword)
    {
        if(password!==confirmPassword)
        {
          alert("Your password and confirm Password does not match!!!")
        }
        else{
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                console.log(email)
                console.log(password)
                // ...
              })
              .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
                alert("Uh Oh!!!")
                console.log(error)
              });
        }
    }
    return(
        <div>
            <Login_page addUser={addUser}/>
        </div>
    );
}

export default Login;