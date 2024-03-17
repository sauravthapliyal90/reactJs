import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false); 
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "123456789";
    if(charAllowed) str += "!@#$%^&&*()_+{}:><?";

    for (let i = 1; i <= length; i++) {
      let element = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(element);
      
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() =>{
    passwordGenerator();
  }, [length,numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-700">
      <h1 className="text-4xl text-center text-white mb-2">Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 '
          placeholder='password'
          readOnly
          />
          <button className='outline-none bg-blue-700 text-white px3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >length:{length}</label>
          </div>
          <div className='flex items-cennter gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
             />
             <label >Numbers</label>
          </div>
          <div className='flex items-cennter gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id='characterInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
             />
             <label >Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
