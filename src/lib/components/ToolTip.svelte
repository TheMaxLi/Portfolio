<script lang="ts">
	import { Spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { hideTooltip, tooltipState } from '$lib/utils/tooltip.svelte';
	import { page } from '$app/state';

	let tooltipPosition = $state({
		x: 0,
		y: 0
	});

	let coords = new Spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);

	let currentPath = $state('');
	$effect(() => {
		if (page && page.url.pathname !== currentPath) {
			currentPath = page.url.pathname;
			hideTooltip();
		}
	});

	function handleMouseMove(event: MouseEvent) {
		if (tooltipState.isVisible) {
			coords.target = { x: event.clientX, y: event.clientY };
		}
	}

	$effect(() => {
		coords;
		tooltipPosition = {
			x: coords.current.x + 15,
			y: coords.current.y + 15
		};
	});

	$effect(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

{#if tooltipState.isVisible}
	<div
		class="pointer-events-none fixed z-[9999] max-w-[350px] rounded-md bg-black px-[10px] py-[6px] text-[14px] text-[white] shadow max-lg:hidden"
		style="left: {tooltipPosition.x}px; top: {tooltipPosition.y}px;"
		transition:fade={{ duration: 150 }}
	>
		{tooltipState.text}
	</div>
{/if}
