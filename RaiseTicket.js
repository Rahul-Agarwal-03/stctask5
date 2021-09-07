import React, {useState} from "react";
import {db} from "./firebase"
import { collection, addDoc } from "firebase/firestore"; 
import {Link} from "react-router-dom"


function Form({addComplaint})
{
   const [priority, setPriority] = useState("")
   const [domain, setDomain] = useState("")
   const [name,setName] = useState("")
   const [complaint,setComplaint] = useState("")
   function handleSubmit(event){
     event.preventDefault()
     if(!priority||!domain||!name||!complaint)
     {
       return
     }
     addComplaint(priority,domain,name,complaint)
     setPriority("")
     setDomain("")
     setName("")
     setComplaint("")
   }
     return(
       <form onSubmit={handleSubmit}>
         <label className="me-3" for="name">Enter Name:</label>
         <input className="me-5" type="text" value={name} placeholder="Name" onChange={
           e=>setName(e.target.value)} id="name" required>
         </input>
         <label className="me-3" for="priority">Select Priority:</label>
         <select className="me-5" value={priority} id="priority" onChange={
           e=>setPriority(e.target.value)
         } required>
           <option value="">Please Choose Priority</option>
           <option value="Low">Low</option>
           <option value="Medium">Medium</option>
           <option value="High">High</option>
         </select>
         <br />
         <label className="mt-3 me-3" for="complaint">Enter Complaint:</label>
         <textarea className="mt-3 me-5" id="complaint" value={complaint} placeholder="Your Complaint?" onChange={
           e=>setComplaint(e.target.value)
         }>Enter Complaint</textarea>
         <label className="me-3 mt-3" for="domain">Your Domain:</label>
         <select className="me-5" value={domain} id="domain" onChange={
           e=>setDomain(e.target.value)} required>
           <option value="">Please Choose Domain</option>
           <option value="finance">Finance</option>
           <option value="software">Software</option>
           <option value="web_Dev">Web Dev</option>
           <option value="operations">Operations</option>
           <option value="app_Dev">App Dev</option>
         </select>
         <button className="sign_up_emp btn btn-warning">Add Complaint</button>
         <Link to="/">
            <button className="sign_up_emp btn btn-warning">Home</button>
            </Link>
       </form>
     )
}

function RaiseTicket() {
  const [data, setData] = useState([
    {
      priority: "",
      complaintId: 0,
      domain: "",
      firstName: "",
      complaint: "",
      status: true
    }
  ])
  async function addComplaint(priority, domain, name, complaint)
  {
    setData(prevData=>{
      return{
        ...prevData,
        complaintId: prevData.complaintId+1
      }
    })
    const newData = [...data, {priority: priority, domain: domain, firstName: name, complaint: complaint }]
    setData(newData)
      try {
        const docRef = await addDoc(collection(db, "Ticket"), {
        complaint: complaint,
        // domain_type: domain_type,
        domain: domain,
        name: name,
        priority: priority,
        status: true
        });
        console.log("Document written with ID: ", docRef.id);
        alert("Ticket Raised!!!")
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }
  
  // console.log(data)
  return (
    <div>
      <Form addComplaint={addComplaint} />
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default RaiseTicket;