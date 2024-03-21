import { useMediaQuery } from 'react-responsive'
import { useContext,  } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

import { GlobalContext } from '../context'

export default function Header () {
  const { 
    toggleMode, 
    setToggleMode, 
    toggleButton, 
    setToggleButton 
  } = useContext(GlobalContext);

  const router = useRouter()
  const pathname = usePathname()
  // console.log(router)

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

  return (
    <>
      <nav className={`border-gray-200 backdrop-blur-sm ${toggleMode ? 'bg-white/30 text-black' : 'dark:bg-zinc-800/30 text-gray-300'}`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-6 px-12">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse" aria-label='Home'>
            <Image width={32} height={8} src="/images/emmanuel-new-image.jpg" className="h-8 rounded-2xl" alt="Emmanuel Logo" />
            <svg xmlns="http://www.w3.org/2000/svg" fill={`${!toggleMode ? 'text-black' : 'text-white'}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6`} onClick={() => setToggleMode(!toggleMode)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </a>
          <button onClick={() => setToggleButton(!toggleButton)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" aria-label="Menu Dropdown ">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="items-center hidden md:flex space-x-6 rtl:space-x-reverse font-semibold text-md">
            <a href="tel:+2348141200636" aria-label='Telephone Number'>(+234) 8141200636</a>
            <a href="#" aria-label='Home'>
              <span onClick={() => router.push('/')}>
                Home
              </span>
            </a>
            <a href="#about" aria-label='About'>
              <span onClick={() => router.push('/#about')}>
                About
              </span>
            </a>
            <a href="#skills" aria-label='Skills'>
              <span onClick={() => router.push('/#skills')}>
                Skills
              </span>
            </a>
            <a href="#what-i-do" aria-label='What I Do'>
              <span onClick={() => router.push('/#what-i-do')}>
                What I do
              </span>
            </a>   
            <a href="/portfolio" aria-label='Portfolio'>Portfolio</a>
            <a href="https://github.com/emma50" aria-label='Github Profile'>
              <Image width={5} height={5} src='/skills/hard-skills/github.svg' alt='' className='w-5 h-5 bg-white rounded-xl'/>
            </a>             
          </div>
        </div>
        {
          toggleButton && !isDesktopOrLaptop &&
          <div className="px-12 pb-4 w-full">
            <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400 flex flex-col gap-1">
              <li 
                className="flex items-center w-inherit p-2 hover:backdrop-blur-sm hover:bg-white/30 cursor-pointer" 
                onClick={() => setToggleButton(false)}
              >
                 (+234) 8141200636
              </li>
              <li 
                className="flex items-center w-inherit p-2 hover:backdrop-blur-sm hover:bg-white/30 cursor-pointer" 
                onClick={() => {
                  setToggleButton(false)
                  router.push('/')
                }}
              >
                <a href="#" aria-label='Home'>Home</a> 
              </li>
              <li 
                className="flex items-center w-inherit p-2 hover:backdrop-blur-sm hover:bg-white/30 cursor-pointer" 
                onClick={() => {
                  setToggleButton(false)
                  router.push('/#about')
                }}
              >
                <a href="#about" aria-label='About'>About</a> 
              </li>
              <li 
                className="flex items-center w-inherit p-2 hover:backdrop-blur-sm hover:bg-white/30 cursor-pointer" 
                onClick={() => {
                  setToggleButton(false)
                  router.push('/#skills')
                }}
              >
                <a href="#skills" aria-label='Skills'>Skills</a> 
              </li>
              <li 
                className="flex items-center w-inherit p-2 hover:backdrop-blur-sm hover:bg-white/30 cursor-pointer" 
                onClick={() => {
                  setToggleButton(false)
                  router.push('/#what-i-do')
                }}
              >
                <a href="#what-i-do" aria-label='What I Do'>What I do</a> 
              </li>
              <li className="flex items-center w-inherit p-2 hover:backdrop-blur-sm hover:bg-white/30 cursor-pointer" onClick={() => setToggleButton(false)}>
                <a href="/portfolio" aria-label='Portfolio'>Portfolio</a> 
              </li>
              <li className="flex items-center w-inherit p-2 hover:backdrop-blur-sm hover:bg-white/30 cursor-pointer" onClick={() => setToggleButton(false)}>
                <a href="https://github.com/emma50" aria-label='Github Profile'>
                  <Image width={5} height={5} src='/skills/hard-skills/github.svg' alt='' className='w-5 h-5 bg-white rounded-xl'/>
                </a> 
              </li>
            </ul>
          </div>
        }
      </nav>
    </>
  )
}