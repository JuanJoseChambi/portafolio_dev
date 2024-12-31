import React, { useEffect, useState } from 'react'
import logo from "/Logo/Isotipo2.png?url"
import Scroll from '../handler/Scroll'
// import ButtonThemeToggle from './ButtonThemeToggle.tsx'


function Nav({sections=true, home=true}:{sections?:boolean; home?:boolean}) {

  const [menu, setMenu] = useState<boolean>(false)

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
      
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));

    if ((storedTheme || prefersDark) === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <nav className="area pt-5 sm:pt-2 fixed top-0 left-0 right-0 bg-blued-300 z-50 flex justify-between items-center bg-redd-500">
        <picture className="w-[30px] h-[30px] max-md:ml-3 z-[150]">
            <img src={logo} alt="Juan Jose"/>
            {!home && <a href='/' className="hidden md:relative" onClick={() => history.back}>Volver</a>}
        </picture>
        <button className="z-[150] max-md:mr-3 flex justify-center items-center sm:hidden text-3xl cursor-pointer bg-white rounded-full p-1" onClick={() => setMenu(!menu)}><i className="bx bx-menu"/></button>
        {sections && <ul className={`${menu ? "w-screen h-screen backdrop-blur-sm text-white text-3xl font-light absolute top-0 left-0 flex flex-col justify-center items-center gap-y-4 bg-[#00000090]" : "hidden sm:flex font-semibold bg-greend-500 px-2 py-1 rounded-lg backdrop-blur-sm text-sm text-gray_light dark:text-neutral-300 gap-5 justify-center itecems-center"}`}>
            <Scroll section='INICIO' id='INICIO'/>
            <Scroll section='PROYECTOS' id='PROYECTOS'/>
            <Scroll section='HABILIDADES' id='HABILIDADES'/>
            <Scroll section='SOBRE MI' id='SOBREMI'/>
            <Scroll section='CONTACTO' id='CONTACTO'/>

            <button onClick={toggleTheme} className="max-sm:absolute max-sm:bottom-10 bg-gray-200 text-gray-900 dark:bg-neutral-700 dark:text-neutral-300 text-lg w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] rounded-full flex justify-center items-center">
              <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`} />
            </button>
        </ul>}
    </nav>
  )
}

export default Nav
