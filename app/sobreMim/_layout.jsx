import React from "react"
import { DetalheProvider } from "../../scripts/sobreMimContext"
import { Slot } from "expo-router"

export default Layout = () => {
    return(
        <DetalheProvider>
            <Slot />
        </DetalheProvider>
    )
}