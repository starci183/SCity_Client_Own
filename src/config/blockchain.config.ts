enum SuiNetwork {
    Devnet = "devnet",
    Testnet = "testnet",
    Mainnet = "mainnet",
}

const getFullNodeUrl = () => {
    const network = process.env.NEXT_PUBLIC_SUI_NETWORK as
        | SuiNetwork
        | undefined
    switch (network) {
    case SuiNetwork.Devnet:
        return "https://fullnode.devnet.sui.io"
    case SuiNetwork.Testnet:
        return ""
    case SuiNetwork.Mainnet:
        return ""
    default:
        return ""
    }
}

export const blockchainConfig = {
    sui: {
        fullNodeUrl: getFullNodeUrl(),
    },
}
