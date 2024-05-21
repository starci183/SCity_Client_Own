"use client"
import React from "react"
import { UnityProvider } from "./_hooks"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <UnityProvider>{children}</UnityProvider>
}

export default Layout
