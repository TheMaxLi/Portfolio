<script lang="ts">
	import { goto } from '$app/navigation';
	import SpinningDisk from './SpinningDisk.svelte';
	import type { ProjectData } from '$lib/utils/ProjectDataType';
	import type { Snippet } from 'svelte';
	let {
		children,
		isFullscreen = $bindable<boolean>(),
		isPlaying = $bindable<boolean>(),
		projectData
	}: {
		children: Snippet;
		isFullscreen: boolean;
		isPlaying: boolean;
		projectData: ProjectData;
	} = $props();

	function togglePlay() {
		isPlaying = !isPlaying;
	}

	function prevProject() {
		if (projectData.previousProject === null) {
			return;
		}
		goto(projectData.previousProject);
	}

	function nextProject() {
		if (projectData.nextProject === null) {
			return;
		}
		goto(projectData.nextProject);
	}

	function toggleFullscreen() {
		isFullscreen = !isFullscreen;
	}

	function exitProject() {
		goto('/');
	}

	$effect(() => {
		document.addEventListener('keydown', (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				toggleFullscreen();
			}
			if (event.key === ' ') {
				isPlaying = !isPlaying;
			}
			if (event.key === 'ArrowLeft' && projectData.previousProject !== null) {
				prevProject();
			}
			if (event.key === 'ArrowRight' && projectData.nextProject !== null) {
				nextProject();
			}
		});
		return () => {
			document.removeEventListener('keydown', () => {});
		};
	});
</script>

<div class="mx-auto flex h-screen w-full flex-col overflow-hidden rounded-lg text-white shadow-lg">
	<div class="flex items-center justify-between border-b border-zinc-700 p-2">
		<div></div>

		<button
			onclick={exitProject}
			class="rounded-full p-1 text-zinc-400 hover:bg-zinc-700 hover:text-white"
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

	<div class="flex flex-col overflow-hidden md:flex-row">
		<SpinningDisk bind:isFullscreen bind:isPlaying />

		{@render children()}
	</div>
	<div class="flex items-center justify-between border-t border-zinc-700 p-3">
		<div class="h-6 w-6 p-1"></div>
		<div class="flex items-center space-x-3">
			<button
				class="text-zinc-400 {projectData.previousProject === null ? '' : 'hover:text-white'}"
				onclick={prevProject}
				disabled={projectData.previousProject === null}
				aria-label="Previous Project Button"
			>
				<svg class="h-6 w-6" viewBox="0 0 24 24">
					<path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" fill="currentColor"></path>
				</svg>
			</button>

			<button
				class="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700 text-white hover:bg-zinc-600"
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
				class="text-zinc-400 {projectData.nextProject === null ? '' : 'hover:text-white'}"
				onclick={nextProject}
				aria-label="Next Project Button"
				disabled={projectData.nextProject === null}
			>
				<svg class="h-6 w-6" viewBox="0 0 24 24">
					<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" fill="currentColor"></path>
				</svg>
			</button>
		</div>

		<button
			class="p-1 text-zinc-400 hover:text-white"
			onclick={toggleFullscreen}
			aria-label="Toggle Fullscreen Button"
		>
			<svg class="h-6 w-6" viewBox="0 0 24 24">
				<path
					class="max-md:hidden"
					d={isFullscreen
						? 'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z'
						: 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'}
					fill="currentColor"
				></path>
			</svg>
		</button>
	</div>
</div>
