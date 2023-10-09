"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    
    const [users, setUsers] = useState([])
    const getUser = async()=>{
      const res=  await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(res.data)
      console.log(users)
    } 
    
    useEffect(() => {
      getUser();
    }, []);
    
  return (
    <>
      <button
        onClick={getUser}
        className="m-12 py-3 px-12 bg-blue-500 rounded-md font-bold text-white cursor-pointer text-2xl"
      >
        Fetch
      </button>
      <div id="val" className="p-7 w-74 bg-slate-400">
        <ul>
            {users.map((e)=>{
                return (
                  <li>
                    {e.username}---<a href={`/${e.id}`}>Explore</a>
                  </li>
                );
            })}
        </ul>
      </div>
    </>
  );
}

export default Api