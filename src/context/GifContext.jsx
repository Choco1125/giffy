import { createContext, useState } from "react"

const Context = createContext({})


//This is a custom provider
export function GifContextProvider({ children }) {

    const [gifs, setGifs] = useState([])

    return <Context.Provider value={{ gifs, setGifs }}>{children}</Context.Provider>

}

export default Context