"use client";

import React, { useState } from "react";

const Contact = () => {
  const [Name, setName] = useState("");

  return (
    <>
      <div>Contact Page</div>
      <h1 className="m-10 text-2xl">Enter Your Name:</h1>
      <form action="">
        <input
          className=" border-2 border-zinc-800 rounded-md px-10 py-4"
          type="text"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(Name);
          }}
        />
      </form>
    </>
  );
};

export default Contact;
