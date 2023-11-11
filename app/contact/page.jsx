'use client';
import React, {useState} from 'react';
import {db} from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

async function addDataToFirestore(name, email, subject, message){
  try{
    const docRef = await addDoc(collection(db, "message"),{
      name:name,
      email:email,
      subject:subject,
      message:message,
    });
    console.log("Document written with the ID: ", docRef);
    return true;
  } catch(error){
    console.error("error adding the document",error)
    return false;
  } 
}

const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const added = await addDataToFirestore(name,email,subject,message);
    if(added){
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      alert("data added to the firestore db!!");
    }
  }
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        
        <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
        <form onSubmit={handleSubmit} className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='border shadow-lg p-3' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact