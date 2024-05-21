"use client"
import { beginZkLogin } from "@features"
import { Button } from "@nextui-org/react"
import { GoogleIcon } from "./GoogleIcon"
import React from "react"

export const ZkLoginSignInWithGoogleButton = () => {
    const onPress = async () => {
        await beginZkLogin()
    }

    return (
        <Button
            startContent={<GoogleIcon size={40} />}
            onPress={onPress}
            size="lg"
            isIconOnly
            variant="flat"
        />
    )
}
