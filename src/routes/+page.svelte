<script lang="ts">
	import Background from '$lib/components/Background.svelte';
	import CdDisk from '$lib/components/CdDisk.svelte';
	import CdDiskBack from '$lib/components/CdDiskBack.svelte';
	import { isFlippedState } from '$lib/utils/isFlipped.svelte';
</script>

<Background />
<div class="flip-container">
	<div class="flip-inner" class:flipped={isFlippedState.isFlipped}>
		<div class="flip-front">
			<CdDisk />
		</div>
		<div class="flip-back">
			<CdDiskBack />
		</div>
	</div>
</div>

<!-- <CdDisk /> -->

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
