<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div
	class="relative flex h-screen w-screen select-none items-center justify-center overflow-hidden
bg-[#121212]"
>
	{@render children()}
</div>
<img
	class="pointer-events-none absolute left-0 top-0 h-full w-full opacity-60"
	src="NOISE.png"
	alt="noise for styling"
/>
