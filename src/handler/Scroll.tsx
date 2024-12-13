import React, { useRef } from 'react';

interface ScrollProps {
    section: string;
    id: string;
}

function Scroll({section, id}:ScrollProps) {
  const handleScroll = () => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <button onClick={handleScroll} className='cursor-pointer'>{section}</button>
  )
}

export default Scroll