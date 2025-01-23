<script lang="ts">
	import Background from '$lib/components/Background.svelte';
	import CdDisk from '$lib/components/CdDisk.svelte';
</script>

<div
	class="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#121212]"
>
	<Background />
	<CdDisk />
	<img
		class="pointer-events-none absolute left-0 top-0 h-full w-full opacity-55"
		src="NOISE.png"
		alt="noise for styling"
	/>
</div>

<!-- wahtevre -->

<!-- {#if !isFlipped}
<img
	transition:fly
	class="pointer-events-none max-h-[317px] sm:max-h-[520px] md:max-h-[640px] lg:max-h-[795.22px]"
	src="CD_CASE.png"
	alt="cd case"
/>
{:else}
<img
	transition:fly
	class="pointer-events-none max-h-[317px] sm:max-h-[520px] md:max-h-[640px] lg:max-h-[795.22px]"
	src="CD_CASE_BACK.png"	
	alt="cd case"
/>
{/if} -->
