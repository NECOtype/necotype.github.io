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
		{
			provider: fontProviders.fontsource(),
			name: "IM Fell Great Primer",
			cssVariable: "--font-im-fell-great",
			fallbacks: ["serif"],
		},
		{
			provider: fontProviders.fontsource(),
			name: "Yuji Syuku",
			cssVariable: "--font-yuji-syuku",
			fallbacks: ["serif"],
		},
	],
	integrations: [],
});
