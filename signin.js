import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"
import { auth } from "./firebaselogin"
import React, { useState } from "react"


function SignPage({ enterUser }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleSubmit(event) {
        event.preventDefault()
        if (!email || !password) {
            return
        }
        enterUser(email, password)
        setEmail("")
        setPassword("")
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
            <button>Sign In</button>
        </form>
    )
}
async function getData() {
    const querySnapshot = await getDocs(collection(db, "Ticket"));
    //   if(user.email.indexOf("fin")!==-1)
    //   {
    //     querySnapshot.forEach((doc) => {
    //         if(doc.domain==="finance"){
    //             console.log(doc.firstName)
    //         }

    //       });
    //   }
    querySnapshot.forEach((doc) => {
        // console.log(doc.data().domain)
        if(doc.data().domain==="Finance")
        {
            console.log(`${doc.data().complaint}=>${doc.data().priority}=>${doc.data().name}`)

        }
    });

}
function Signin() {
    function enterUser(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //   console.log(user.email)
                getData()
                // ...
            })
            .catch((error) => {
                alert("UH Oh!!!!")
                console.log(error)
            });
    }
    return (
        <div>
            <SignPage enterUser={enterUser} />
        </div>
    )
}
export default Signin