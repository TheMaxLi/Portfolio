<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let className: string;
</script>

<div
	class={cn(
		'h-full w-full md:[transform-style:preserve-3d]  md:[&>*]:[transform-style:preserve-3d]',
		className
	)}
>
	<slot />
</div>
