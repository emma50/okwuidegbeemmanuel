'use client'

import { createContext, useState } from 'react';

export const GlobalContext = createContext('');

export function CustomContext ({children}) {
  const [toggleMode, setToggleMode] = useState(true)
  const [toggleButton, setToggleButton] = useState(false)

  return (
    <GlobalContext.Provider 
      value={{ 
        toggleMode, 
        setToggleMode,
        toggleButton,
        setToggleButton 
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}