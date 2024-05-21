"use client"
import { useContext } from "react"
import { UnityContext } from "./_hooks"
import { Unity } from "react-unity-webgl"
import React from "react"

const Page = () => {
    const { unity } = useContext(UnityContext)!
    const { unityProvider } = unity

    return (
        <div className="w-full h-screen">
            <Unity
                unityProvider={unityProvider}
                matchWebGLToCanvasSize
                devicePixelRatio={window.devicePixelRatio}
                className="h-full w-full block m-auto"
            />
        </div>
    )
}
export default Page
