<script lang="ts">
	import { cn } from '$lib/utils/cn';

	const props: { title: string; href?: string; className: string } = $props();
</script>

<a
	href={props.href}
	class={cn('inline-block w-fit cursor-pointer hover:border-2', props.className)}
>
	{@html props.title}
</a>
