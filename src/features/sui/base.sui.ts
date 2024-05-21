import { SuiClient } from "@mysten/sui.js/client"
import { blockchainConfig } from "../../config/blockchain.config"

export const suiClient = new SuiClient({ url: blockchainConfig.sui.fullNodeUrl })