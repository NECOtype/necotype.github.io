<script>
	import { onMount, onDestroy } from "svelte";
	import { quote, fetchQuote } from "../stores/quote";

	let currentQuote;
	let unsubscribe;

	onMount(() => {
		unsubscribe = quote.subscribe((value) => {
			currentQuote = value;
		});
		fetchQuote();
	});

	onDestroy(() => {
		if (unsubscribe) unsubscribe();
	});
</script>

{#if currentQuote}
	<div class="text-xs">
		<span>{currentQuote.content}</span>
		<span> - {currentQuote.character.name}</span>
	</div>
{:else}
	<p>loading...</p>
{/if}