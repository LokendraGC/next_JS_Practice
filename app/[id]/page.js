"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
  // console.log(params)
  const {id} = params;

  const [user, setUser] = useState([])
  
  const getUser = async()=>{
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
    setUser(resp.data)
    // console.log(resp.data)
    console.log(user)
  }
  console.log(user)
  useEffect(() => {
    
  getUser();
  }, [])
  
  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default page