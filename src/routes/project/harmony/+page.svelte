<script>
	import SpinningDisk from '../SpinningDisk.svelte';

	let isPlaying = $state(false);
	let isFullscreen = $state(false);

	// Project/Song data
	const projectData = {
		title: 'Harmony',
		category: 'hyper new Year',
		creator: 'wewe SIn',
		source: '我喜欢的音乐',
		collaborators: ['东女GOGO', 'GG龙虾', 'YUNG NIKE', 'tree'],
		technologies: ['Drizzle', 'Docker', 'Socket.io', 'SQLite', 'Claude', 'Langchain', 'Tailwind'],
		frameworks: ['Solid.js'],
		tools: '4pod',
		designer: 'moss'
	};

	function togglePlay() {
		isPlaying = !isPlaying;
	}

	function prevProject() {
		// Logic for previous project
		console.log('Previous project');
	}

	function nextProject() {
		// Logic for next project
		console.log('Next project');
	}

	function toggleFullscreen() {
		isFullscreen = !isFullscreen;
	}
</script>

<div
	class="mx-auto flex h-screen w-full flex-col overflow-hidden rounded-lg bg-gray-800 text-white shadow-lg"
>
	<div class="flex items-center justify-between border-b border-gray-700 bg-gray-900 p-2">
		<div></div>

		<button
			class="rounded-full p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
			aria-label="Exit button"
		>
			<svg class="h-4 w-4" viewBox="0 0 24 24">
				<path
					d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
					fill="currentColor"
				></path>
			</svg>
		</button>
	</div>

	<div class="flex flex-1 flex-col overflow-hidden md:flex-row">
		<SpinningDisk bind:isFullscreen bind:isPlaying />

		<div class={`flex-1 overflow-y-auto p-5 ${isFullscreen ? 'w-full' : 'md:w-2/3'}`}>
			<div class="mb-4">
				<h1 class="text-2xl font-bold">{projectData.title}</h1>
			</div>

			<div class="mb-5 flex flex-wrap gap-3 text-sm text-gray-300">
				<span>专辑: {projectData.category}</span>
				<span>歌手: {projectData.creator}</span>
				<span>来源: {projectData.source}</span>
			</div>

			<div class="mb-5 flex space-x-2 border-b border-gray-700 pb-3">
				<button class="rounded-full bg-gray-700 px-4 py-2 text-sm text-white">歌词</button>
				<button class="rounded-full px-4 py-2 text-sm text-gray-400 hover:bg-gray-700">百科</button>
				<button class="rounded-full px-4 py-2 text-sm text-gray-400 hover:bg-gray-700"
					>相似推荐</button
				>
			</div>

			<div class="mb-4 text-sm text-gray-300">
				{projectData.collaborators.join(' / ')}
			</div>

			<div class="mb-6 space-y-2">
				<div class="flex">
					<span class="w-20 text-sm text-gray-500">Tech stack:</span>
					<span class="flex-1 text-sm text-gray-300">{projectData.technologies.join(' / ')}</span>
				</div>

				<div class="flex">
					<span class="w-20 text-sm text-gray-500">Framework:</span>
					<span class="flex-1 text-sm text-gray-300">{projectData.frameworks.join(' / ')}</span>
				</div>
			</div>

			<!-- Project info - This area will be replaced by your custom implementation -->
			<div class="space-y-3 text-sm text-gray-300">
				<p>打开新的世界现在hyper New Year</p>
				<p>疯狂的人,孤独的人they can hear my lonely</p>
				<!-- More project description would go here -->
			</div>
		</div>
	</div>

	<div class="flex items-center justify-between border-t border-gray-700 bg-gray-900 p-3">
		<div></div>
		<div class="flex items-center space-x-3">
			<button
				class="text-gray-400 hover:text-white"
				onclick={prevProject}
				aria-label="Previous Project Button"
			>
				<svg class="h-6 w-6" viewBox="0 0 24 24">
					<path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" fill="currentColor"></path>
				</svg>
			</button>

			<button
				class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-600"
				onclick={togglePlay}
			>
				<svg class="h-8 w-8" viewBox="0 0 24 24">
					{#if isPlaying}
						<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"></path>
					{:else}
						<path d="M8 5v14l11-7z" fill="currentColor"></path>
					{/if}
				</svg>
			</button>

			<button
				class="text-gray-400 hover:text-white"
				onclick={nextProject}
				aria-label="Next Project Button"
			>
				<svg class="h-6 w-6" viewBox="0 0 24 24">
					<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" fill="currentColor"></path>
				</svg>
			</button>
		</div>

		<button
			class="p-1 text-gray-400 hover:text-white"
			onclick={toggleFullscreen}
			aria-label="Toggle Fullscreen Button"
		>
			<svg class="h-6 w-6" viewBox="0 0 24 24">
				<path
					d={isFullscreen
						? 'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z'
						: 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'}
					fill="currentColor"
				></path>
			</svg>
		</button>
	</div>
</div>

<style>
	:global(.animate-spin-slow) {
		animation: spin 8s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	:global(.transform.-rotate-30) {
		transform: rotate(-30deg);
	}
</style>
