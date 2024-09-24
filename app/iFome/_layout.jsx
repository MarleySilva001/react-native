import React from "react";
import { AppProvider } from "../../scripts/appContext";
import { Slot } from "expo-router";

export default Layout = () =>{
    return (
        <AppProvider>
            <Slot />
        </AppProvider>
    )
}