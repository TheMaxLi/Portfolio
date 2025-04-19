<script lang="ts">
	import type { ProjectData } from '$lib/utils/ProjectDataType';
	import MusicPlayerWrapper from '../MusicPlayerWrapper.svelte';

	let isPlaying = $state(false);
	let isFullscreen = $state(false);
	let activeView = $state('lyrics');

	const projectData: ProjectData = {
		title: 'Mina Bites',
		role: 'Fullstack Developer',
		timeline: 'Oct → Dec 2024',
		source: 'Restaurant App',
		technologies: ['Svelte 5', 'SvelteKit', 'FourSquare API', 'Drizzle ORM', 'Vercel', 'Figma'],
		frameworks: ['Svelte/TypeScript'],
		nextProject: null,
		previousProject: '/project/circles'
	};
</script>

<MusicPlayerWrapper bind:isPlaying bind:isFullscreen {projectData} bind:activeView>
	{#if activeView === 'lyrics'}
		<div
			class="flex h-full w-full flex-col items-center space-y-16 overflow-y-auto pb-10 text-lg text-zinc-300 max-sm:overflow-scroll"
		>
			<div
				class="flex items-center space-x-40 {isFullscreen ? 'px-[280px]' : '-[1090px] w-full '} "
			>
				<div class="space-y-5">
					<h2 class="font-YoungSerif text-3xl text-white">
						Restaurant Discovery & Social Planning App
					</h2>
					<p>
						Mina Bites is a restaurant discovery and planning app inspired by my love for exploring
						new dining experiences. It bridges the gap between finding great places to eat and
						planning meals with friends, creating a more social and organized approach to dining
						out.
					</p>
				</div>
			</div>

			<div class="flex flex-col items-center">
				<div class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0">
					<div class="max-w-[700px] space-y-4">
						<h4 class="font-YoungSerif text-3xl text-white">Discover & Recommend</h4>
						<p>
							The restaurant discovery feature uses the FourSquare API to help users find nearby
							restaurants based on cuisine, location, and price range. Users can browse through
							restaurant profiles with ratings, photos, and reviews to make informed choices.
						</p>
					</div>
					<div class="mt-6 flex justify-center">
						<img src="/PlaceHolderImage.png" alt="Discovery View" class="w-7/12 shadow-lg" />
					</div>
				</div>
				<div
					class="flex flex-row-reverse items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0"
				>
					<div class="max-w-[700px] space-y-4">
						<h4 class="font-YoungSerif text-3xl text-white">Social Recommendations</h4>
						<p>
							The group recommendations feature allows users to share and vote on restaurant options
							with friends. It simplifies the process of deciding where to eat by collecting
							everyone's preferences in one place and highlighting top choices.
						</p>
					</div>
					<div class="mt-6 flex justify-center">
						<img src="/PlaceHolderImage.png" alt="Group recommendations" class="w-7/12 shadow-lg" />
					</div>
				</div>
				<div class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0">
					<div class="max-w-[700px] space-y-4">
						<h4 class="font-YoungSerif text-3xl text-white">Restaurant Logging</h4>
						<p>
							Users can log visits to restaurants, rate their experiences, and add personal notes.
							This feature helps users track their dining history and build a personalized food
							journal to remember their favorite dishes and experiences.
						</p>
					</div>
					<div class="mt-6 flex justify-center">
						<img src="/PlaceHolderImage.png" alt="Restaurant Logging" class="w-7/12 shadow-lg" />
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div
			class="flex h-full w-full flex-col items-center space-y-16 overflow-y-auto pb-10 pt-1 text-lg text-zinc-300 max-sm:overflow-scroll"
		>
			<div
				class="flex flex-col items-center space-y-12 {isFullscreen
					? 'px-[280px]'
					: '-[1090px] w-full '}"
			>
				<!-- <div class="w-full space-y-6">
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
										<a
											href="https://mina-bites-kh7k.vercel.app/"
											class="text-blue-400 hover:underline">Live</a
										>
										<a
											href="https://github.com/TheMaxLi/Mina-Bites"
											class="text-blue-400 hover:underline">GitHub Repository</a
										>
									</div>
								</div>
							</div>
						</div>
					</div> -->

				<div class="w-full space-y-6">
					<div class="rounded-lg bg-zinc-800 p-6">
						<h3 class="mb-4 font-YoungSerif text-2xl text-white">Tech Stack</h3>

						<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">
									Framework & Frontend
								</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									{#each projectData.frameworks as framework}
										<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
											>{framework}</span
										>
									{/each}
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">Svelte 5</span
									>
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
										>SvelteKit</span
									>
								</div>
								<p class="mt-4">
									Built with Svelte 5 and SvelteKit for a fast, reactive user interface that
									enhances the dining discovery experience.
								</p>
							</div>

							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">Database & ORM</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
										>Drizzle ORM</span
									>
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">SQLite</span>
								</div>
								<p class="mt-4">
									Drizzle ORM provides type-safe database queries and schema management, making it
									easy to maintain complex relationships.
								</p>
							</div>
						</div>

						<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">External APIs</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
										>FourSquare API</span
									>
								</div>
								<p class="mt-4">
									The FourSquare API powers restaurant discovery with detailed information about
									venues.
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
