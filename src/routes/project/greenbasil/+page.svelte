<script lang="ts">
	import type { ProjectData } from '$lib/utils/ProjectDataType';
	import MusicPlayerWrapper from '../MusicPlayerWrapper.svelte';

	let isPlaying = $state(false);
	let isFullscreen = $state(false);
	let activeView = $state('lyrics');

	const projectData: ProjectData = {
		title: 'Green Basil',
		role: 'Fullstack Developer',
		timeline: 'Jan → May 2025',
		source: 'Restaurant App',
		technologies: ['Svelte 5', 'SvelteKit', 'Tailwind CSS', 'Vercel', 'Figma'],
		nextProject: null,
		previousProject: '/project/circles'
	};
</script>

<MusicPlayerWrapper bind:isPlaying bind:isFullscreen {projectData} bind:activeView>
	{#if activeView === 'lyrics'}
		<div
			class="flex h-full w-full flex-col items-center space-y-16 overflow-y-auto pb-10 text-lg text-zinc-300 max-sm:overflow-scroll {isFullscreen
				? 'px-[280px]'
				: '-[1090px] w-full '} "
		>
			<div class="flex items-center space-x-40">
				<div class="space-y-5">
					<h2 class="font-YoungSerif text-3xl text-white">Restaurant Website Development</h2>
					<p>
						Led the architectural redesign of Green Basil's website to create a modern,
						high-performance digital presence that showcases their menu and ambiance. The project
						focused on optimizing user experience through performance improvements while maintaining
						a visually rich design that reflects the restaurant's unique atmosphere.
					</p>
				</div>
			</div>

			<div class="flex flex-col items-center space-y-20">
				<div class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0">
					<div class="space-y-4">
						<h4 class="font-YoungSerif text-3xl text-white">Performance Optimization</h4>
						<p>
							Enforced a comprehensive image optimization strategy utilizing WebP format, which
							reduced page load times by 62%. Established best practices for the development team
							that balanced visual quality with performance, resulting in Lighthouse performance
							scores jumping from 54 to 91.
						</p>
					</div>
					<div class="mt-6 flex justify-center">
						<img src="/PlaceHolderImage.png" alt="Discovery View" class="w-3/4 shadow-lg" />
					</div>
				</div>

				<div
					class="flex flex-row-reverse items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0"
				>
					<div class="space-y-4">
						<h4 class="font-YoungSerif text-3xl text-white">Smooth Scrolling Implementation</h4>
						<p>
							Developed a custom smooth scrolling system using the scrollRef API that enhances user
							experience with performant animations. Created a framework for landing page scrolling
							that the development team could easily implement across sections, ensuring consistent
							behavior throughout the site.
						</p>
					</div>
					<div class="mt-6 flex justify-center">
						<img src="/PlaceHolderImage.png" alt="Restaurant Logging" class="w-3/4 shadow-lg" />
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div
			class="flex h-full w-full flex-col items-center overflow-y-auto pt-1 text-lg text-zinc-300 max-sm:overflow-scroll"
		>
			<div
				class="flex flex-col items-center space-y-8 {isFullscreen
					? 'px-[280px]'
					: '-[1090px] w-full '}"
			>
				<div class="w-full space-y-6">
					<div class="rounded-lg bg-zinc-800 p-6">
						<h3 class="mb-4 font-YoungSerif text-2xl text-white">Project Details</h3>
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">Role</h4>
								<p>{projectData.role}</p>
							</div>

							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">Project Links</h4>
								<div class="flex space-x-4">
									<a href="https://mina-bites-kh7k.vercel.app/" class="text-orange-400 underline"
										>Live</a
									>
									<a href="https://github.com/nathan-gg/gb" class="text-orange-400 underline"
										>GitHub Repository</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="w-full space-y-6">
					<div class="rounded-lg bg-zinc-800 p-6">
						<h3 class="mb-4 font-YoungSerif text-2xl text-white">Tech Stack</h3>

						<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">
									Framework & Frontend
								</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">Svelte</span>
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">
										Tailwind CSS
									</span>
								</div>
								<p class="mt-4">
									Built with Svelte for a fast, reactive user interface that enhances the page
									exploration experience.
								</p>
							</div>
							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">Design & UI/UX</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">Figma</span>
								</div>
								<p class="mt-4">
									The entire user interface was designed in Figma before development.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="w-full space-y-6">
					<div class="rounded-lg bg-zinc-800 p-6">
						<h3 class="mb-4 font-YoungSerif text-2xl text-white">Side Notes</h3>

						<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">
									Framework & Frontend
								</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">Svelte</span>
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">
										Tailwind CSS
									</span>
								</div>
								<p class="mt-4">
									Built with Svelte for a fast, reactive user interface that enhances the page
									exploration experience.
								</p>
							</div>
							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">Design & UI/UX</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">Figma</span>
								</div>
								<p class="mt-4">
									The entire user interface was designed in Figma before development.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</MusicPlayerWrapper>
