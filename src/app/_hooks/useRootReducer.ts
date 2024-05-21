import { useReducer } from "react"
import { ZkLoginAccountData } from "@features"

export enum AuthMode {
    Suiet,
    ZkLogin,
}

export interface SuiSession {
    authMode: AuthMode
    zkAccountData?: ZkLoginAccountData | null
}

export interface RootState {
    sessions: {
        sui: SuiSession
    }
}

export interface SetSuiSessionAuthModeAction {
    type: "SET_SUI_SESSION_AUTH_MODE"
    payload: AuthMode
}

export interface SetSuiSessionZkAccountDataAction {
    type: "SET_SUI_SESSION_ZK_ACCOUNT_DATA"
    payload: ZkLoginAccountData | null
}

export type RootAction =
    | SetSuiSessionAuthModeAction
    | SetSuiSessionZkAccountDataAction

export const initialState: RootState = {
    sessions: {
        sui: {
            authMode: AuthMode.Suiet,
            zkAccountData: null,
        },
    },
}

export const reducer = (
    state: RootState = initialState,
    action: RootAction
): RootState => {
    switch (action.type) {
    case "SET_SUI_SESSION_AUTH_MODE":
        return {
            ...state,
            sessions: {
                ...state.sessions,
                sui: {
                    ...state.sessions.sui,
                    authMode: action.payload,
                },
            },
        }
    case "SET_SUI_SESSION_ZK_ACCOUNT_DATA":
        return {
            ...state,
            sessions: {
                ...state.sessions,
                sui: {
                    ...state.sessions.sui,
                    zkAccountData: action.payload,
                },
            },
        }
    default:
        return state
    }
}

export const useRootReducer = () => {
    return useReducer(reducer, initialState)
}
