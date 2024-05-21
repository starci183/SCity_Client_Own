"use client"
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react"

import React from "react"
import {
    ConnectSuiButtons,
    ZkLoginSignInWithFacebookButton,
    ZkLoginSignInWithGoogleButton,
} from "./_components"

const Page = () => {
    return (
        <div className="w-screen h-screen">
            <div className="absolute w-full h-full flex justify-center">
                <Image
                    className="object-none h-full brightness-50"
                    alt="background"
                    removeWrapper
                    src="/background.png"
                    radius="none"
                />
            </div>
            <div className="absolute w-full h-full z-10 grid place-content-center gap-4">
                <Card>
                    <CardHeader className="text-center font-bold text-xl p-4 text-center justify-center">Connect Wallet</CardHeader>
                    <CardBody className="flex flex-col gap-4 p-4">
                        
                        <ConnectSuiButtons />
                        
                        <div className="flex gap-2 items-center">
                            <Divider className="flex-1" />
                            <div className="text-sm text-divider"> OR </div>
                            <Divider className="flex-1" />
                        </div>
                        <div className="flex gap-4">
                            <ZkLoginSignInWithGoogleButton />
                            <ZkLoginSignInWithFacebookButton />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Page
