'use client'

import { useContext } from "react"

import { GlobalContext } from "../context"
import { certifications } from "../lib/data"
import Header from "../ui/header"
import Footer from "../ui/footer"

export default function Certifications () {
  const { mode } = useContext(GlobalContext);

  return (
    <div className={`min-h-screen overflow-hidden text-wrap py-2  ${!mode ? 'dark:bg-zinc-900 text-white' : 'bg-white text-black'} my-[-1rem]`}>
      <div className="fixed w-full backdrop-blur-sm z-50">
        <Header/>
      </div>
      <main className="grid-cols-2 px-10 md:px-20 py-8">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex flex-col gap-6 md:gap-8 pt-12">
            <h1 className="font-bold text-3xl" data-testid='certifications'>Certifications</h1>
            <p data-testid='projects'>Here are some notable certifications I possess. I try to update as soon as I can.</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row gap-10 md:gap-3 items-center justify-center p-4 md:p-2">
          {
            certifications.map((ele) => {
              return (
                <div key={ele.id} className="block p-2 px-4 m-4 border max-w-sm max-h-lg md:w-80 md:h-32 border-gray-200 rounded-lg shadow">
                  <div className="flex gap-4 justify-between pb-6">
                    <div>
                      <div className="flex items-center flex-wrap w-full mb-5">
                        <span className="font-bold">{ele.body}{':'}</span>
                        <span className="font-medium text-sm">{ele.certificate}</span>
                        <div className="font-medium text-sm flex pt-3">
                          <span>{ele.issued.at}{' - '}{ele.issued.expiration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href={ele.verify_authenticity} aria-label="Project link" target="_blank">
                        <span dangerouslySetInnerHTML={{ __html: ele.linkIcon }}/>
                      </a>
                    </div>
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