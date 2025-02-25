<script lang="ts">
	import { cn } from '$lib/utils/cn';

	const props: { title: string; href: string; className: string } = $props();

	function handleAnchorClick(event: Event, href: string) {
		event.preventDefault();
		event.stopPropagation();
		const anchor = document.querySelector(href) as HTMLElement;
		if (!anchor) {
			console.log('no ');
		}
		window.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<button
	onclick={(e) => handleAnchorClick(e, props.href)}
	class={cn(
		'inline-block w-fit cursor-pointer font-YoungSerif font-normal text-[#CFD1CF]',
		'[text-shadow:_0px_0px_10px_rgb(255_255_255_/_1.00)] hover:border-2 hover:[box-shadow:_0px_0px_10px_rgb(255_255_255_/_0.50)]',
		props.className
	)}
>
	{@html props.title}
</button>
