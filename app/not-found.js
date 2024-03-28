"use client"

import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { useContext } from "react";

import { GlobalContext } from "./context";
import Header from "./ui/header"
import Footer from "./ui/footer"
 
export default function NotFound() {
  const { toggleMode } = useContext(GlobalContext);

  return (
    <div className={`min-h-screen overflow-hidden text-wrap py-2  ${!toggleMode ? 'dark:bg-zinc-900 text-white' : 'bg-white text-black'} my-[-1rem]`}>
      <div className="fixed w-full backdrop-blur-sm z-50">
        <Header/>
      </div>
      <main className="flex h-dvh flex-col items-center justify-center gap-2">
        <FaceFrownIcon className="w-10 text-gray-400" />
        <h2 className="text-xl font-semibold">404 Not Found</h2>
        <p>Could not find the requested invoice.</p>
        <Link
          href="/"
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        >
          Return Home
        </Link>
      </main>
      <div className="pt-20">
        <Footer/>
      </div>
    </div>
  );
}