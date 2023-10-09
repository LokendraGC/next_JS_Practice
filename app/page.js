"use client"

import Link from 'next/link';

const page = () => {

  return (
    <>
      <h1 className="m-6 text-2xl">This is Home Page</h1>
      <Link href="Contact" className='ml-12 py-3 px-12 bg-blue-500 rounded-md font-bold text-white cursor-pointer text-2xl'>contact</Link>
      <Link href="Api_example" className='ml-12 py-3 px-12 bg-blue-500 rounded-md font-bold text-white cursor-pointer text-2xl'>Get Api</Link>
      <Link href="Toast" className='ml-12 py-3 px-12 bg-blue-500 rounded-md font-bold text-white cursor-pointer text-2xl'>Tost</Link>
    </>
  );
}

export default page