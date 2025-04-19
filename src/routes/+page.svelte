<script lang="ts">
	import CdDisk from '$lib/components/CdDisk.svelte';
	import CdDiskBack from '$lib/components/CdDiskBack.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import handleAnchorClick from '$lib/utils/handleAnchorClick';
	import { isFlippedState } from '$lib/utils/isFlipped.svelte';
	import { hideTooltip, showTooltip } from '$lib/utils/tooltip.svelte';
	import ProjectSection from './ProjectSection.svelte';

	// Should we keep global state or page state? IDK lollllllllllllll
	let isFlipped = $state(false);

	function handleKeyClick(e: KeyboardEvent) {
		e.preventDefault();
		switch (e.key) {
			case '0':
				handleAnchorClick(e, '#Harmony');
				break;
			case '1':
				handleAnchorClick(e, '#Circles');
				break;
			case '2':
				handleAnchorClick(e, '#MinaBites');
				break;
			case '3':
				handleAnchorClick(e, '#GreenBasil');
				break;
			case '4':
				handleAnchorClick(e, '#RhythmShu');
				break;
		}
	}
</script>

<svelte:window onkeypress={handleKeyClick} />
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative flex h-[500px] select-none items-center justify-center overflow-hidden pt-[50px] sm:overflow-visible md:h-[calc(100vh-100px)] md:pt-[0px]"
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
<p class="hidden w-full justify-center pb-[50px] text-xl text-white text-opacity-40 sm:flex">
	P.S. Try hovering your mouse over the disk!
</p>
<p class=" text-md flex w-full justify-center pb-[50px] text-white text-opacity-40 sm:hidden">
	P.S. Try tapping the disk!
</p>

<ProjectSection />
<Footer />

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
