'use client'

import { useContext } from "react"
import Image from "next/image"

import { GlobalContext } from "../context"
import { portfolio } from "../lib/data"
import Header from "../ui/header"
import Footer from "../ui/footer"

export const metadata = {
  title: 'Portfolio',
};

export default function Portfolio () {
  const { toggleMode } = useContext(GlobalContext);

  return (
    <div className={`min-h-screen overflow-hidden text-wrap py-2  ${!toggleMode ? 'dark:bg-zinc-900 text-white' : 'bg-white text-black'} my-[-1rem]`}>
      <div className="fixed w-full backdrop-blur-sm z-50">
        <Header/>
      </div>
      <main className="grid-cols-2 px-10 md:px-20 py-8">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex flex-col gap-6 md:gap-8 pt-12">
            <h1 className="font-bold text-3xl">Portfolio</h1>
            <p>Here are some notable projects I have worked on. I try to update as soon as I can.</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row gap-10 md:gap-3 items-center justify-center p-4 md:p-2">
          {
            portfolio.map((ele) => {
              return (
                <div key={ele.id} className="block p-2 px-4 m-4 border max-w-sm max-h-lg md:w-80 md:h-80 border-gray-200 rounded-lg shadow">
                  <div className="flex gap-4 justify-between pb-6">
                    <div>{ele.status}</div>
                    <div className="flex gap-2">
                      <a href={ele.link} aria-label="Project link" target="_blank">
                        <span dangerouslySetInnerHTML={{ __html: ele.linkIcon }}/>
                      </a>
                      <a href={ele.githubLink} aria-label="Github link" target="_blank">
                        <Image width={4} height={4} src={ele.githubIcon} alt='' className="w-4 h-4 bg-white rounded-lg"/>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap w-full mb-5">
                    <p className="font-bold">{ele.title}</p>
                  </div>
                  <div className="flex items-center flex-wrap w-full mb-6">
                    <p className="font-medium text-sm">{ele.content}</p>
                  </div>
                  <div className="flex gap-3 items-center flex-wrap w-full">
                    {
                      ele.stack.map((item) => {
                        return (
                          <div key={item.id} className="flex text-sm">{item.name}</div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </main>
      <div className="pt-20">
        <Footer/>
      </div>
    </div>
  )
}