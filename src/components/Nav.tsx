import React, { useState } from 'react'
import logo from "/Logo/Isotipo2.png?url"
import Scroll from '../handler/Scroll'


function Nav() {

  const [menu, setMenu] = useState<boolean>(false)
  
  return (
    <nav className="area pt-5 sm:pt-2 fixed top-0 left-0 right-0 bg-blued-300 z-50 flex justify-between items-center bg-redd-500">
        <picture className="w-[30px] h-[30px] max-md:ml-3 z-[150]">
            <img src={logo} alt="Juan Jose"/>
        </picture>
        <button className="z-[150] max-md:mr-3 flex justify-center items-center sm:hidden text-3xl cursor-pointer bg-white rounded-full p-1" onClick={() => setMenu(!menu)}><i className="bx bx-menu"/></button>
        <ul className={`${menu ? "w-screen h-screen backdrop-blur-sm text-white text-3xl font-light absolute top-0 left-0 flex flex-col justify-center items-center gap-y-4 bg-[#00000090]" : "hidden sm:flex font-semibold bg-greend-500 px-2 py-1 rounded-lg backdrop-blur-sm text-sm text-gray_light gap-5 justify-center itecems-center"}`}>
            <Scroll section='INICIO' id='INICIO'/>
            <Scroll section='PROYECTOS' id='PROYECTOS'/>
            <Scroll section='HABILIDADES' id='HABILIDADES'/>
            <Scroll section='SOBRE MI' id='SOBREMI'/>
            <Scroll section='CONTACTO' id='CONTACTO'/>
            {/* <li className='sm:hidden w-[40px] h-[40px] flex justify-center items-center absolute bottom-3 rounded-full text-black bg-white'><i className='bx bx-moon'/></li> */}
        </ul>
    </nav>
  )
}

export default Nav
