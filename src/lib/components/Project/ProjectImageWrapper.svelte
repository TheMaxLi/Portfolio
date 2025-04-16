<script lang="ts">
	import { goto } from '$app/navigation';
	import PlusIcon from './PlusIcon.svelte';
	let { children, src } = $props();

	let isMouseEntered = $state(false);
	function handleNavigate() {
		goto(src);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<button
	onmouseenter={() => (isMouseEntered = true)}
	onmouseleave={() => (isMouseEntered = false)}
	onclick={handleNavigate}
	class="relative flex flex-col border border-white/[0.2] p-4"
>
	<PlusIcon class="absolute -left-3 -top-3 h-6 w-6 text-white" />
	<PlusIcon class="absolute -bottom-3 -left-3 h-6 w-6 text-white" />
	<PlusIcon class="absolute -right-3 -top-3 h-6 w-6 text-white" />
	<PlusIcon class="absolute -bottom-3 -right-3 h-6 w-6 text-white" />
	<div class={isMouseEntered ? 'fill-animation' : 'unfill-animation'}>
		{@render children()}
	</div>
</button>

<style>
	.fill-animation {
		animation: fill 0.5s ease-in-out forwards;
	}
	.unfill-animation {
		animation: unfill 0.5s ease-in-out backwards;
	}

	@keyframes fill {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.03);
		}
	}

	@keyframes unfill {
		from {
			transform: scale(1.03);
		}
		to {
			transform: scale(1);
		}
	}
</style>
