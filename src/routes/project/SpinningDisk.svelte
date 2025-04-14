<script lang="ts">
	import { slide } from 'svelte/transition';

	let { isFullscreen = $bindable<boolean>(), isPlaying = $bindable<boolean>() } = $props();
</script>

{#if !isFullscreen}
	<div
		class="flex items-center justify-center p-6 max-lg:hidden lg:w-1/3"
		transition:slide={{ axis: 'x' }}
	>
		<div class="relative h-56 w-56 md:h-full md:w-full">
			<div
				class="absolute flex h-full w-full items-center justify-center rounded-full
					  {isPlaying ? 'animate-spin-slow' : ''}"
			>
				<div class=" overflow-hidden rounded-full shadow-lg">
					<img alt="CD" src="/CD.webp" class="pointer-events-none" />
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	:global(.animate-spin-slow) {
		animation: spin 8s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	:global(.transform.-rotate-30) {
		transform: rotate(-30deg);
	}
</style>
