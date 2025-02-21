<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<!-- <div class="background-wrapper"> -->
{@render children()}
<!-- </div> -->

<!-- <style>
	.background-wrapper {
		background: url('/src/lib/images/NOISE.png') repeat; /* Replace with the actual path to your image */
		background-size: cover; /* Ensures the image covers the full height */
		min-height: 100vh; /* Ensures the background covers the full viewport height */
	}
</style> -->
