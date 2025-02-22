<script lang="ts">
	import BackgroundGrain from '$lib/components/BackgroundGrain.svelte';
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}
<BackgroundGrain />
