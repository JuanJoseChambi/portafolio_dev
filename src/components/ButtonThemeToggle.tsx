import { set } from 'astro:schema';
import React, { useEffect, useState } from 'react'

function ButtonThemeToggle() {

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
    <button onClick={toggleTheme} className="bg-gray-200 text-gray-900 dark:bg-neutral-700 dark:text-neutral-300 w-[30px] h-[30px] rounded-full flex justify-center items-center">
        <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`} />
    </button>
  )
}

export default ButtonThemeToggle