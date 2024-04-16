'use client'

import { 
  createContext, 
  useState, 
  useEffect, 
  useCallback, 
  useMemo 
} from 'react';

export const GlobalContext = createContext('');

export function CustomContext ({children}) {
  // const [toggleMode, setToggleMode] = useState(true)
  // const [toggleButton, setToggleButton] = useState(false)

  const [mode, setMode] = useState(true)
  const [button, setButton] = useState(false)

  const toggleMode = useCallback(() => setMode(!mode), [mode])
  const toggleButton = useCallback(() => setButton(!button), [button])

  const value = useMemo(() => {
    return  {
      mode,
      button,
      toggleMode,
      toggleButton,
    }
  }, [mode, button, toggleMode, toggleButton])

  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register("/service-worker.js", {
            scope: "/",
          });
          console.log(`Service worker registration ${registration}`)
          if (registration.installing) {
            console.log("Service worker installing");
          } else if (registration.waiting) {
            console.log("Service worker installed");
          } else if (registration.active) {
            console.log("Service worker active");
          }
        } catch (error) {
          console.error(`Registration failed with ${error}`);
        }
      }
    };
    
    registerServiceWorker()
  }, [])

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}