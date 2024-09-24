import { createContext, useState } from "react"

export const AppContext = createContext()
export const AppProvider = ({children}) => {
    const [detail, setDetail ] = useState([])

    return (
        <AppContext.Provider value={{detail, setDetail}}>
            {children}
        </AppContext.Provider>
    )
}