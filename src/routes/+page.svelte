<script lang="ts">
	import CdDisk from '$lib/components/CdDisk.svelte';
	import CdDiskBack from '$lib/components/CdDiskBack.svelte';
	import { isFlippedState } from '$lib/utils/isFlipped.svelte';
	import { hideTooltip, showTooltip } from '$lib/utils/tooltip.svelte';
	import ProjectSection from './ProjectSection.svelte';

	// Should we keep global state or page state? IDK lollllllllllllll
	let isFlipped = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative flex h-[600px] select-none items-center justify-center overflow-hidden md:h-screen lg:h-screen"
>
	<div
		class="flip-container"
		onclick={() => (isFlippedState.isFlipped = !isFlippedState.isFlipped)}
		onmouseenter={() => showTooltip('Click me to flip me!!')}
		onmouseleave={() => hideTooltip()}
	>
		<div class="flip-inner" class:flipped={isFlippedState.isFlipped}>
			<div class="flip-front top-[-200px] sm:top-[-300px] md:top-[-400px]">
				<CdDisk />
			</div>
			<div class="flip-back top-[-200px] sm:top-[-300px] md:top-[-400px]">
				<CdDiskBack />
			</div>
		</div>
	</div>
</div>
<ProjectSection />

<style>
	.flip-container {
		perspective: 1000px;
	}

	.flip-inner {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}

	.flip-front,
	.flip-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}

	.flip-back {
		transform: rotateY(180deg);
	}

	.flip-inner.flipped {
		transform: rotateY(180deg);
	}
</style>
