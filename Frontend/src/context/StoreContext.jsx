import React, { createContext } from 'react'

export const URLContextProvider = createContext()

const StoreContext = ({children}) => {

    let url = "https://powerbi-embed-dashboard-backend.onrender.com"
//   let url = "http://localhost:5000"


  return (
    <URLContextProvider.Provider value={{url}}>
        {children}
    </URLContextProvider.Provider>
  )
}

export default StoreContext