import React, { useState } from 'react'

interface CardProp {
    title: string;
    icon:string
}

function CardServices({title, icon}:CardProp) {
    const [hover, setHover] = useState<string>("")

  return (
    <section 
        onMouseEnter={() => setHover(title)}
        onMouseLeave={() => setHover("")}
        className="min-w-[250px] cursor-pointer flex flex-col justify-center items-center gap-y-3
        py-8 font-semibold text-xl text-neutral-500 hover:text-neutral-800 transition-colors duration-700
        bg-white shadow-md shadow-neutral-400">
        <div className='flex flex-col justify-center items-center'>
            <i className={`bx-lg ${icon}`}/>
            <div className='flex justify-center items-center'>
                <p className='text-primary font-bold'>{title[0]}</p>
                {title.slice(1)}
            </div>
            <div className={`${hover === title ? "w-full" : "w-0"} h-[2px] transition-[width] duration-500 bg-primary`}></div>
        </div>
    </section>
  )
}

export default CardServices