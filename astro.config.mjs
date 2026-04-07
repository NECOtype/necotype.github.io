// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Instrument Serif",
			cssVariable: "--font-instrument",
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
