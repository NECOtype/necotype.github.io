// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.local(),
			name: "ZT Formom",
			cssVariable: "--font-zt-formom",
			options: {
				variants: [
					{
						weight: 400,
						style: "normal",
						src: ["./src/assets/fonts/ZT Formom.woff2"]
					}
				]
			},
			fallbacks: ["serif"],
		},
		{
			provider: fontProviders.fontsource(),
			name: "IM Fell English",
			cssVariable: "--font-im-fell",
			fallbacks: ["serif"],
		},
	],
});