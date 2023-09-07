import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const[value, setValue] = useState()
    console.log(value)

    const navigate = useNavigate()

    const clickHanldle = () =>{
        navigate(`/room/${value}`)        
    }


  return (
    <div>
      <h1>Video Calling</h1>        
        <input onChange={(e)=>setValue(e.target.value)}
        type='text' placeholder='type meeting id' />
        <button onClick={clickHanldle}>Start Meeting</button>
    </div>
  )
}

export default Home
