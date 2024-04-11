"use client"

import { useContext } from "react";
// import Image from "next/image";

// import { services } from "./lib/data";
// import { GlobalContext } from "./context";
// import Header from "./ui/header";
// import Footer from "./ui/footer";
// import { CardList } from "./ui/card-list";

import { services } from "../lib/data";
import { GlobalContext } from "../context";
import Header from "../ui/header";
import Footer from "../ui/footer";
import { CardList } from "../ui/card-list";

export default function Client() {
  const { toggleMode } = useContext(GlobalContext);
  
  return (
    <div className={`min-h-screen overflow-hidden w-full text-wrap py-2 ${!toggleMode ? 'dark:bg-zinc-900 text-gray-300' : 'bg-white text-black'} my-[-1rem] w-full`}>
      <div className="fixed w-full backdrop-blur-sm z-50">
        <Header/>
      </div>
      <main className="px-10 md:px-20 my-4">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center md:justify-center p-10 md:p-20 md:pt-10" id='about'>
          <div className="mt-12 md:mt-0 max-w-72 max-h-60 md:max-w-96 md:max-h-72 min-w-56 min-h-56">          
            <img className="rounded-full shadow-xl shadow-gray-1000" src="/images/emmanuel-new-image.jpg" alt="image description"/>
          </div>
          <div className="pt-2 self-center justify-self-center md:pt-20">
            <p className="pt-4 font-bold text-lg">{"<Software Engineer/>"}</p>
            <p className="pt-4 font-bold">{"Hello World! 👋, My name is Okwuidegbe Emmanuel"}</p>
            <p className="md:max-w-96 md:text-wrap pt-4">{"I am a passionate web developer with 4+ years of experience. I specialize in building cool things on the web."}</p>
            <div className="py-1 flex gap-4">
              <span>
                <a href="https://www.linkedin.com/in/okwuidegbeemmanuel/" aria-label="Linkedin" target="_blank" rel="noreferrer" className="px-1">
                  <svg className="w-8 h-8 me-2 px-1 rounded-full border-2 border-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </span>
              <span>
                <a href="https://github.com/emma50" aria-label="Github" target="_blank" rel="noreferrer" className="px-1">
                  <svg className= "w-8 h-8 me-2 px-1 rounded-full border-2 border-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                  </svg>
                </a>
              </span>
              <span>
                <a href="https://twitter.com/OkwuidegbeEmma1" aria-label="Twitter" target="_blank" rel="noreferrer" className="px-1">
                  <svg className="w-8 h-8 me-2 px-1 rounded-full border-2 border-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                  </svg>
                </a>
              </span>
            </div>
            <a href="#Let's connect" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" aria-label="Let's connect">{"Let's connect"}</a>
          </div>
        </div>
        <div className="text-center pt-16 md:pt-20" id='skills'> 
          <h1 className="text-2xl font-bold mb-10" data-testid='skills'>Skills</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="text-start mb-10">
              <h2 className="text-xl font-bold mb-6 px-10 pl-16 md:px-10" data-testid='hard skills'>Hard Skills</h2>
              <div className="flex flex-wrap justify-center gap-4 z-0">
                <CardList hardSkills={true}/>
              </div>
            </div>
            <div className="text-start">
              <h2 className="text-xl font-bold mb-6 px-10 pl-16 md:px-10" data-testid='soft skills'>Soft Skills</h2>
              <div className="flex flex-wrap gap-4">
                <CardList hardSkills={false}/>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 md:p-20 md:pb-0" id='what-i-do'>
          <h1 className="font-bold text-2xl pb-2 border-b-2 border-solid border-current w-fit" data-testid='what I do'>What I do</h1>
          <div className="p-10 px-4 md:p-20">
            {
              services.map((ele) => (
                <div key={ele.id} className="flex flex-col gap-2 items-center flex-wrap pb-16 md:px-10 text-center">
                  <div dangerouslySetInnerHTML={{ __html: ele.image }}/>
                  <div className="pb-4 font-semibold text-xl">{ele.title}</div>
                  <div>{ele.content}</div>
                </div>
              ))
            }
          </div>
        </div>
        <div id="Let's connect" className="pt-16 md:p-20 md:px-48 text-center">
          <h1 className="font-bold text-2xl text-center pb-6">{"Let's connect"}</h1>
          <p>{"My inbox is alway opens, whether you have a question or just want to connect. Feel free to reach out on Linkedin or simply send me a mail."}</p>
          <div className="py-2 flex justify-center gap-4">
            <span>
              <a href="https://www.linkedin.com/in/okwuidegbeemmanuel/" aria-label="Linkedin" target="_blank" rel="noreferrer" className="px-1">
                <svg className="w-8 h-8 me-2 px-1 rounded-full border-2 border-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" focusable="false">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </span>
            <span>
              <a href="https://twitter.com/OkwuidegbeEmma1" aria-label="Twitter" target="_blank" rel="noreferrer" className="px-1">
                <svg className="w-8 h-8 me-2 px-1 rounded-full border-2 border-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
              </a>
            </span>
          </div>
          <button type="button" href="Let's connect" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" aria-label="Let's connect">
            <a href="mailto:okwuidegbeemmanuel@gmail.com" aria-label="Email Me" data-testid='email me'>Email Me</a>
            </button>
        </div>
      </main>
      <div className="pt-20">
        <Footer/>
      </div>
    </div>
  );
}
