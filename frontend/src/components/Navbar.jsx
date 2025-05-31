import React from 'react'
import { Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 shadow-lg flex justify-around items-center px-6 py-2 text-white font-sans">
      <div className="text-2xl font-extrabold tracking-wide cursor-pointer text-center text-white hover:scale-105 transition-transform duration-300">
        <span className="text-blue-400">&lt;</span>
        Pass<span className="text-pink-500">Man</span>
        <span className="text-blue-400">/&gt;</span>
        <div className="text-xs text-gray-300 mt-[-4px]">Your secure password vault</div>
      </div>
      {/* <ul className='flex gap-6 '>
        <li className='cursor-pointer hover:font-bold'> <a href="">Home </a></li>
        <li className='cursor-pointer hover:font-bold'> <a href="">About </a></li>
        <li className='cursor-pointer hover:font-bold'> <a href="">Contact </a></li>
      </ul> */}
      <a href="http://github.com/CipherHitro" target='_blank'><button className='flex border border-white p-2 rounded-full px-4 gap-1 text-md cursor-pointer hover:bg-slate-500 hover:font-semibold'>
        <Github />
        <span>GitHub</span>
      </button></a>
    </nav>
  )
}

export default Navbar
