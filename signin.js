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
            <label className="me-3" for="email">Enter your Work Email:</label>
            <input className="me-5" type="email" value={email} placeholder="example@domain.co.in" onChange={
                e => setEmail(e.target.value)} id="email" required>
            </input>
            <label className="me-3" for="password">Enter your Password:</label>
            <input className="me-5" type="password" value={password} placeholder="Password" onChange={
                e => setPassword(e.target.value)} id="password" required>
            </input>
            <button className="sign_in_emp btn btn-warning">Sign In</button>
        </form>
    )
}

function DisplayData({index,complaint,name,priority})
{
 return(
     <div>
        {name==="" ? <span></span>: <h1>Complaint No.: {index+1}</h1>}
        {name==="" ? <span></span>: <h1>Employee Name: {name} </h1>}
        {name==="" ? <span></span>:<h1>Complaint is: {complaint}</h1>}
        {name==="" ? <span></span>:<h1>Priority is: {priority}</h1>}
         <hr></hr>
     </div>
 )   
}
function Signin() {
    const [display,setDisplay] = useState([{
        complaint: "",
        name: "",
        priority: ""
    }])
    function enterUser(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //   console.log(user.email)
                getData(user.email)
                // ...
            })
            .catch((error) => {
                alert("Please Check your credetnials!!!")
                console.log(error)
            });
    } 
    async function getData(email) {
        const querySnapshot = await getDocs(collection(db, "Ticket"));
    
        let area = email.slice(email.indexOf("@")+1,email.indexOf("@")+4)
        // console.log(area,"area")
        const dataArray=[]
        querySnapshot.forEach((doc) => {
            // console.log(doc.data().domain)
            // console.log(doc.data().domain.slice(0,3),"first")
            if(doc.data().domain.slice(0,3).toLowerCase()===area)
            {
                
                const newData= { complaint: doc.data().complaint, name: doc.data().name, priority: doc.data().priority }
            //   console.log(display,"display before")
              dataArray.push(newData)
            }  
        });
        // console.log(dataArray)
        setDisplay(dataArray)
        // console.log(display)
    }
    return (
        <div>
            <SignPage enterUser={enterUser} />
            {display.map((ticket,index)=>(
                <DisplayData index={index} complaint={ticket.complaint} name={ticket.name} priority={ticket.priority} />
            ))}
        </div>
    )
}
export default Signin