<script lang="ts">
	import CdDisk from '$lib/components/CdDisk.svelte';
	import CdDiskBack from '$lib/components/CdDiskBack.svelte';
	import Iphone15Pro from '$lib/components/Iphone15Pro.svelte';
	import { isFlippedState } from '$lib/utils/isFlipped.svelte';
	import ProjectSection from './ProjectSection.svelte';
</script>

<!-- <Background /> -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="relative flex h-screen select-none items-center justify-center overflow-hidden">
	<div
		class="flip-container"
		onclick={() => (isFlippedState.isFlipped = !isFlippedState.isFlipped)}
	>
		<div class="flip-inner" class:flipped={isFlippedState.isFlipped}>
			<div class="flip-front">
				<CdDisk />
			</div>
			<div class="flip-back">
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
		top: -400px;
		backface-visibility: hidden;
	}

	.flip-back {
		transform: rotateY(180deg);
	}

	.flip-inner.flipped {
		transform: rotateY(180deg);
	}
</style>
