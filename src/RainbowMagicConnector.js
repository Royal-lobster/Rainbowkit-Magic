import { MagicConnector } from "@everipedia/wagmi-magic-connector";

export const rainbowMagicConnector = ({ chains }) => ({
  id: "magic",
  name: "Magic",
  iconUrl: "https://alpha.everipedia.org/images/magiclink.svg",
  iconBackground: "#fff",
  createConnector: () => {
    const connector = new MagicConnector({
      chains: chains,
      options: {
        apiKey: "YOUR_API_KEY",
        oauthOptions: {
          providers: ["google", "twitter", "discord"],
        },
      },
    });
    return {
      connector,
    };
  },
});
