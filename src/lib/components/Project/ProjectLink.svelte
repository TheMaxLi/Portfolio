<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import handleAnchorClick from '$lib/utils/handleAnchorClick';
	import { hideTooltip, showTooltip } from '$lib/utils/tooltip.svelte';

	const props: { title: string; href: string; className: string; name?: string } = $props();
</script>

<button
	onclick={(e) => handleAnchorClick(e, props.href)}
	onmouseenter={() => (props.name ? showTooltip(`Go to ${props.name}!`) : hideTooltip())}
	onmouseleave={() => showTooltip('Click me to flip me!!')}
	class={cn(
		'inline-block w-fit cursor-pointer font-YoungSerif font-normal text-[#CFD1CF] ',
		'[text-shadow:_0px_0px_10px_rgb(255_255_255_/_1.00)] hover:border-2 hover:[box-shadow:_0px_0px_10px_rgb(255_255_255_/_0.50)]',
		props.className
	)}
>
	{@html props.title}
</button>
