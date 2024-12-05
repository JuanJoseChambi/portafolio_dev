import React, { useState } from 'react'
import logo from "../../public/Logo/Isotipo2.png"


function Nav() {

  const [menu, setMenu] = useState<boolean>(false)
  
  return (
    <nav className="area pt-5 sm:pt-2 fixed top-0 left-0 right-0 bg-blued-300 z-50 flex justify-between items-center">
        <picture className="w-[30px] h-[30px]">
            <img src={logo.src} alt="Juan Jose"/>
        </picture>
        <button className="z-[150] flex justify-center items-center sm:hidden text-3xl cursor-pointer bg-white rounded-full p-1" onClick={() => setMenu(!menu)}><i className="bx bx-menu"/></button>
        <ul className={`${menu ? "w-screen h-screen absolute top-0 left-0 flex flex-col justify-center items-center bg-blue-500" : "hidden sm:flex font-semibold bg-green-500 text-sm text-gray_light gap-5 justify-center itecems-center"}`}>
            <li className="cursor-pointer">INICIO</li>
            <li className="cursor-pointer">PROYECTOS</li>
            <li className="cursor-pointer">HABILIDADES</li>
            <li className="cursor-pointer">SOBRE MI</li>
            <li className="cursor-pointer">CONTACTO</li>
        </ul>
    </nav>
  )
}

export default Nav
