import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import {db} from "./firebase"
import { auth } from "./firebaselogin"
import {db} from "./firebase"
import { collection, addDoc } from "firebase/firestore"; 
import {Link}  from "react-router-dom"


function LoginPage({ addUser }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("")
    function handleSubmit(event) {
        event.preventDefault()
        if (!email || !password||!name) {
            return
        }
        addUser(email, password, confirmPassword)
        addEmployee(email,name)
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setName("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label className="me-5" for="name">Enter your name:</label>
            <input className="me-5" type="text" value={name} placeholder="Name" onChange={
                e => setName(e.target.value)} id="name" required>

            </input>

            <label className="me-4" for="email">Enter your Work Email</label>
            <input className="me-5" type="email" value={email} placeholder="Email" onChange={
                e => setEmail(e.target.value)} id="email" required>
            </input>
            <label className="me-4 mt-3" for="password">Enter your Password</label>
            <input className="me-5" type="password" value={password} placeholder="Password" onChange={
                e => setPassword(e.target.value)} id="password" required>
            </input>
            <label className="me-5 mt-3" for="confirm_password">Confirm Password: </label>
            <input className="me-5" type="password" value={confirmPassword} placeholder="Confirm Password" onChange={
                e => setConfirmPassword(e.target.value)} id="confirm_password" required>
            </input>
            <button className="sign_up_emp btn btn-warning">Add User</button>
            <Link to="/">
            <button className="sign_up_emp btn btn-warning">Home</button>
            </Link>
        </form>
    )

}
async function addEmployee(email,name){
    try {
        const docRef = await addDoc(collection(db, "Employee"), {
        email: email,
        name: name
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
function Login() {
    function addUser(email, password, confirmPassword) {
        if (password !== confirmPassword) {
            alert("Your password and confirm Password does not match!!!")
        }
        else {
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
       
    return (
        <div>
            <LoginPage addUser={addUser} addEmployee={addEmployee} />
        </div>
    );
}

export default Login;