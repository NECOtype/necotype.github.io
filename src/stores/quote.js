import { writable } from "svelte/store";

const localKey = "cachedQuote";

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(localKey) : null;
const initial = stored ? JSON.parse(stored) : null;

export const quote = writable(initial);

export async function fetchQuote() {
	try {
		const res = await fetch("https://api.animechan.io/v1/quotes/random");
		const data = await res.json();

		if (data.status === "success" && data.data?.content) {
			quote.set(data.data);
			if (typeof localStorage !== 'undefined') {
				localStorage.setItem(localKey, JSON.stringify(data.data));
			}
		} else {
			console.warn("API returned an error, using cached quote: ", data.message);
		}
	} catch (erro) {
		errorMessage = "Unknown response format.";
	}
}