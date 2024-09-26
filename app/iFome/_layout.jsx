import React from "react";
import { AppProvider } from "../../scripts/appContext";
import { Slot, Stack } from "expo-router";

export default Layout = () => {
    return (
        <AppProvider>
                <Slot />
        </AppProvider>
    )
}