import { getZkLoginSignature } from "@mysten/zklogin"
export type OpenIdProvider = "Google" | "Twitch" | "Facebook"

export type PartialZkLoginSignature = Omit<
    Parameters<typeof getZkLoginSignature>["0"]["inputs"],
    "addressSeed"
>

export interface ZkLoginSession {
    openIdProvider: OpenIdProvider
    maxEpoch: number
    jwtRandomness: string
    ephemeralPrivateKey: string
}

export const saveZkLoginSession = (session: ZkLoginSession) =>
    localStorage.setItem("zkLoginSession", JSON.stringify(session))

export const getZkLoginSession = (): ZkLoginSession | null => {
    const sessionString = localStorage.getItem("zkLoginSession")
    return sessionString ? JSON.parse(sessionString) : null
}

export const removeZkLoginSession = () => {
    localStorage.removeItem("zkLoginSession")
}
