"use client"

import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Tostify = () => {

  const getToast = ()=>{
    toast.success("Login Succesfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: 0,
      theme: "dark",
    });
  }
  return (
    <>
    <button onClick={getToast} className="m-24 py-3 w-40 px-12 bg-blue-500 rounded-md font-bold text-white cursor-pointer text-2xl">
      Login
    </button>
    <ToastContainer/>
    </>
  );
}

export default Tostify