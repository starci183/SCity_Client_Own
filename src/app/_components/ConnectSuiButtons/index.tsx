"use client"
import { Button, Image } from "@nextui-org/react"
import { useWallet } from "@suiet/wallet-kit"
import { useRouter } from "next/navigation"
import React from "react"
import { routerConfig } from "@config"

enum SupportedWallets {
    Suiet = "Suiet",
    // SuiWallet = "Sui Wallet",
}

export const ConnectSuiButtons = () => {
    const router = useRouter()
    const { select, configuredWallets, detectedWallets } = useWallet()
    const wallets = [...configuredWallets, ...detectedWallets].filter(
        ({ name }) => Object.values(SupportedWallets).includes(name as SupportedWallets)
    )

    return (
        <div className="flex flex-col gap-4">
            {wallets.map(({ name, installed, iconUrl }) => (
                <Button
                    key={name}
                    startContent={
                        <Image
                            alt={name}
                            src={iconUrl}
                            removeWrapper
                            radius="none"
                            height={32}
                            width={32}
                        />
                    }
                    onPress={() => {
                        if (!installed) {
                            return
                        }
                        select(name)
                        router.push(routerConfig.play.url)
                    }}
                    size="lg"
                    variant="flat"
                >
                    Connect {name}
                </Button>
            ))}
        </div>
    )
}
