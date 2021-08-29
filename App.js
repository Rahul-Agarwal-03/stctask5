import React, {useState} from "react";
import {db} from "./firebase"
import { collection, addDoc } from "firebase/firestore"; 


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
         <label for="name">Enter Name</label>
         <input type="text" value={name} placeholder="Name" onChange={
           e=>setName(e.target.value)} id="name" required>
         </input>
         <label for="priority">Select Priority</label>
         <select value={priority} id="priority" onChange={
           e=>setPriority(e.target.value)
         } required>
           <option value="">Please Choose Priority</option>
           <option value="Low">Low</option>
           <option value="Medium">Medium</option>
           <option value="High">High</option>
         </select>
         <label for="complaint">Enter Complaint</label>
         <textarea id="complaint" value={complaint} placeholder="Your Complaint?" onChange={
           e=>setComplaint(e.target.value)
         }>Enter Complaint</textarea>
         <label for="domain">Your Domain</label>
         <select value={domain} id="domain" onChange={
           e=>setDomain(e.target.value)} required>
           <option value="">Please Choose Domain</option>
           <option value="Finance">Finance</option>
           <option value="Software">Software</option>
           <option value="Web_Dev">Web Dev</option>
           <option value="Operations">Operations</option>
           <option value="App_Dev">App Dev</option>
         </select>
         <button>Add Complaint</button>
       </form>
     )
}

function App() {
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

export default App;