<script lang="ts">
	import BackgroundGrain from '$lib/components/BackgroundGrain.svelte';
	import ToolTip from '$lib/components/ToolTip.svelte';
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}
<BackgroundGrain />
<ToolTip />
