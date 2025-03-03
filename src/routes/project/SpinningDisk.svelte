<script lang="ts">
	import { fade, slide, fly } from 'svelte/transition';

	let { isFullscreen = $bindable<boolean>(), isPlaying = $bindable<boolean>() } = $props();
</script>

{#if !isFullscreen}
	<div class="flex items-center justify-center bg-gray-900 p-6 md:w-1/3" transition:slide>
		<div class="relative h-56 w-56 md:h-full md:w-full">
			<div
				class="absolute flex h-full w-full items-center justify-center rounded-full bg-gray-900 shadow-lg
					  {isPlaying ? 'animate-spin-slow' : ''}"
			>
				<div class=" overflow-hidden rounded-full">
					<img alt="CD" src="/src/lib/images/CD.png" />
				</div>
			</div>
		</div>
	</div>
{/if}
