<script lang="ts">
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils/cn';

	const props: { title: string; href: string; className: string } = $props();
	function handleNavigate(event: Event, href: string) {
		event.stopPropagation();
		goto(href);
	}
</script>

<button
	onclick={(e) => handleNavigate(e, props.href)}
	class={cn(
		'inline-block w-fit cursor-pointer font-YoungSerif font-normal text-[#CFD1CF]',
		'[text-shadow:_0px_0px_10px_rgb(255_255_255_/_1.00)] hover:border-2 hover:[box-shadow:_0px_0px_10px_rgb(255_255_255_/_0.50)]',
		props.className
	)}
>
	{@html props.title}
</button>
