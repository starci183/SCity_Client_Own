"use client"
import React, {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
} from "react"
import { useUnityContext } from "react-unity-webgl"
import { UnityContextHook } from "react-unity-webgl/distribution/types/unity-context-hook"
import { publicConfig, routerConfig } from "@config"
import { RootContext } from "../../_hooks"
import { useRouter } from "next/navigation"
import { useWallet } from "@suiet/wallet-kit"
import { AuthMode } from "../../_hooks"

export interface UnityContextValue {
    unity: UnityContextHook
}

export const UnityContext = createContext<UnityContextValue | null>(null)

export const UnityProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter()

    const { reducer } = useContext(RootContext)!
    const [state] = reducer
    const { sessions } = state
    const { sui } = sessions
    const { authMode, zkAccountData } = sui

    const { account } = useWallet()

    if (!zkAccountData?.userAddress && !account?.address) {
        router.push(routerConfig.home.url)
    }

    const address =
        authMode === AuthMode.Suiet
            ? account?.address
            : zkAccountData?.userAddress

    const unity = useUnityContext({
        loaderUrl: publicConfig.unityWebGLBuild.loader,
        dataUrl: publicConfig.unityWebGLBuild.data,
        frameworkUrl: publicConfig.unityWebGLBuild.framework,
        codeUrl: publicConfig.unityWebGLBuild.wasm,
    })

    const unityContextValue: UnityContextValue = useMemo(
        () => ({
            unity,
        }),
        [unity]
    )

    const { sendMessage, isLoaded } = unity

    useEffect(() => {
        if (!isLoaded) return
        sendMessage("Browser", "SetAddress", address)
    }, [isLoaded])

    return (
        <UnityContext.Provider value={unityContextValue}>
            {children}
        </UnityContext.Provider>
    )
}
