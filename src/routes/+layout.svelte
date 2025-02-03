<script lang="ts">
	import { isFlippedState } from '$lib/utils/isFlipped.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	onclick={() => (isFlippedState.isFlipped = !isFlippedState.isFlipped)}
	class="relative flex h-screen w-screen select-none items-center justify-center overflow-hidden
bg-[#121212]"
>
	{@render children()}
</div>
<img
	class="pointer-events-none absolute left-0 top-0 h-full w-full opacity-60"
	src="NOISE.png"
	alt="noise for styling"
/>
