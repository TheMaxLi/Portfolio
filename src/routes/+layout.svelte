<script lang="ts">
	import BackgroundGrain from '$lib/components/BackgroundGrain.svelte';
	import ToolTip from '$lib/components/ToolTip.svelte';
	import { onNavigate } from '$app/navigation';
	import '../app.css';
	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

{@render children()}
<BackgroundGrain />
<ToolTip />
