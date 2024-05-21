"use client"
import { beginZkLogin } from "@features"
import { Button } from "@nextui-org/react"
import { FacebookIcon } from "./FacebookIcon"
import React from "react"

export const ZkLoginSignInWithFacebookButton = () => {
    const onPress = async () => {
        await beginZkLogin()
    }

    return (
        <Button
            startContent={<FacebookIcon size={40} />}
            onPress={onPress}
            size="lg"
            isIconOnly
            variant="flat"
        />
    )
}
