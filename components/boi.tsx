import React from 'react'
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { LiaDownloadSolid } from 'react-icons/lia'

export default function Boi() {
  return (
    <div 
      className="flex flex-col justify-start items-center min-h-[100vh] max-h-fit pt-[28vh] text-zinc-900 dark:text-white text-center"
      id="home"
    >
      <p className="text-[16px] mb-3">{`Hi, I'm`}</p>
      <h1 className="text-zinc-500 dark:text-white font-bold text-4xl">
        Ahmed Beasar
      </h1>
      <p className="text-zinc-900 dark:text-white tracking-[.1em] text-[16px] opacity-85 mb-6">
          Frontend Developper
      </p>
      <a 
        download
        href="/en/Fronted_Dev_Ahmed_beasar.pdf"
        className="bg-zinc-500 text-white hover:bg-zinc-600 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300 flex items-center rounded-[26px] mt-6"
      >
        <span className="ml-3">Download CV</span>
        <LiaDownloadSolid className="w-14 h-12 p-2 rounded-r-[26px] right-[-5px]"/>
      </a>
      <div className="flex flex-col justify-around items-center w-fit h-60 fixed top-20 right-3 z-10 py-3">
        <a 
          href={'https://github.com/aboAliAhmed'} 
          target='_blank' 
          className="text-black dark:text-white hover:text-zinc-800 dark:hover:bg-black rounded-full"
        >
          <FaGithub className="w-10 h-10" />
        </a>
        <a
          href={'https://www.linkedin.com/in/ahmed-besar-944220220/'} 
          target='_blank' 
          className="text-sky-500 dark:text-white hover:text-sky-600 dark:hover:text-sky-800"
        >
          <FaLinkedinIn className="w-9 h-9 p-[2px]" />
        </a>
        <a 
          href={'https://www.facebook.com/ahmedabderrahmanbesar/'} 
          target='_blank' 
          className="text-blue-700 hover:text-blue-900/90 dark:text-white dark:hover:text-blue-800/90 "
        >
          <FaFacebook className="w-10 h-10 rounded-full" />
        </a>
        <a
          href={'http://wa.me/+201274625521'} 
          target='_blank' 
          className="bg-white text-green-500 hover:text-white hover:bg-green-500 dark:bg-transparent dark:text-white dark:hover:text-zinc-200 dark:hover:bg-[#0cc042] rounded-full rounded-bl-none" 
        >
          <FaWhatsapp className="w-10 h-10" />
        </a>
      </div>
    </div>
  )
}