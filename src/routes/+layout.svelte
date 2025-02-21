<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<img
	class="pointer-events-none absolute left-0 top-0 h-full w-full opacity-60"
	src="NOISE.png"
	alt="noise for styling"
/>
