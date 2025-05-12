'use client';
import { useState } from "react";
const SignUp = () => {
  const [form,setForm] = useState({name:'',email:'',password:''});
  const [error,setError] = useState('');

  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    setError('');

    const res = await fetch('/api/signup',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form),
    });

    const data = await res.json();
    if(!res.ok) return setError(data.error || 'signup failed');

    window.location.href = '/login';

  }
  return (
    <form
    className="p-4 max-w-sm  mx-auto space-y-4 bg-blue-100 mt-10 flex flex-col"
    onSubmit={handleSubmit}
    >
      <input 
      type="text" 
      placeholder="Name"
      className="p-2 border border-indigo-500 "
      onChange={(e)=>setForm({...form,name:e.target.value})}
      />
      
      <input 
      type="email" 
      placeholder="Email"
       className="p-2 border border-indigo-500 "
       onChange={(e)=>setForm({...form,email:e.target.value})}
      />
      <input 
      type="password" 
      placeholder="Password"
       className="p-2 border border-indigo-500 "
       onChange={(e)=>setForm({...form,password:e.target.value})}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
       type="submit"
       className="bg-indigo-500 text-white py-1 hover:bg-indigo-400 cursor-pointer"
       >Signup</button>
    </form>
  )
}

export default SignUp