"use client"
import React, {
    ReactNode,
    createContext,
    useLayoutEffect,
    useMemo,
} from "react"

import {
    RootState,
    RootAction,
    useRootReducer,
    AuthMode,
} from "./useRootReducer"
import { completeZkLogin } from "@features"
import { useRouter } from "next/navigation"
import { routerConfig } from "@config"

export interface RootContextValue {
    reducer: [RootState, React.Dispatch<RootAction>]
}

export const RootContext = createContext<RootContextValue | null>(null)

export const RootProvider = ({ children }: { children: ReactNode }) => {
    const reducer = useRootReducer()
    const [, dispatch] = reducer
    const router = useRouter()

    useLayoutEffect(() => {
        const handleLayoutEffect = async () => {
            const res = await completeZkLogin()
            if (res === null) return
            dispatch({
                type: "SET_SUI_SESSION_ZK_ACCOUNT_DATA",
                payload: res,
            })
            dispatch({
                type: "SET_SUI_SESSION_AUTH_MODE",
                payload: AuthMode.ZkLogin,
            })

            router.push(routerConfig.play.url)
        }
        handleLayoutEffect()
    }, [dispatch])

    const rootContextValue: RootContextValue = useMemo(
        () => ({
            reducer,
        }),
        [reducer]
    )

    return (
        <RootContext.Provider value={rootContextValue}>
            {children}
        </RootContext.Provider>
    )
}
