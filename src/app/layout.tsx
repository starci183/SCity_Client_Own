"use client"
import React from "react"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const inter = Open_Sans({ subsets: ["latin"] })
import { NextUIProvider } from "@nextui-org/react"
import { RootProvider } from "./_hooks"
import { WalletProvider as SuietWalletProvider } from "@suiet/wallet-kit"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <RootProvider>
            <SuietWalletProvider>
                <html lang="en">
                    <body className={inter.className}>
                        <NextUIProvider>
                            <div className="w-screen min-h-screen">{children}</div>
                        </NextUIProvider>
                    </body>
                </html>
            </SuietWalletProvider>
        </RootProvider>
    )
}

export default Layout
