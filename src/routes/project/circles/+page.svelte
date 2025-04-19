<script lang="ts">
	import type { ProjectData } from '$lib/utils/ProjectDataType';
	import MusicPlayerWrapper from '../MusicPlayerWrapper.svelte';

	let isPlaying = $state(false);
	let isFullscreen = $state(false);
	let activeView = $state('lyrics');

	const projectData: ProjectData = {
		title: 'Circles',
		role: 'Fullstack Developer',
		timeline: 'Jan → Apr 2024',
		source: '我的照片',
		technologies: [
			'Express.js',
			'Prisma',
			'SQLite',
			'Cloudinary',
			'Google Maps API',
			'Socket.io',
			'Multer'
		],
		frameworks: ['HTML/JavaScript'],
		nextProject: null,
		previousProject: '/project/harmony'
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
					<h2 class="font-YoungSerif text-3xl text-white">Social Media-Enabled Photo Organizer</h2>
					<p>
						Circles is a photo sharing and organization platform for close friends. It is envisioned
						as Google Drive but with social features — allowing friends to create groups (circles),
						share albums, and interact with each other's content in a more personal and organized
						way than traditional photo organziation platforms.
					</p>
				</div>
			</div>

			<div
				class="flex items-center space-x-40 {isFullscreen ? 'px-[280px]' : '-[1090px] w-full '} "
			>
				<div class="space-y-5">
					<h2 class="font-YoungSerif text-3xl text-white">Development Approach</h2>
					<p>
						For photo storage, I had no previous experience with image handling, so I researched
						various options. After comparing solutions, I chose Cloudinary with Multer as it offered
						a straightforward integration path compared to other options.
					</p>
					<p>
						The location feature involved some fun team discussions on implementation approaches. We
						ultimately decided on a hybrid solution that extracts coordinates from photo metadata
						when available and falls back to Google Location API for manual user input.
					</p>
					<p>
						I implemented the real-time notification system using WebSockets despite having no prior
						experience with the technology, relying heavily on documentation and tutorials to build
						the client-server communication for likes, comments, and invitations.
					</p>
				</div>
			</div>
			<div class="flex flex-col items-center">
				<div class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0">
					<div class="max-w-[700px] space-y-4">
						<h4 class="font-YoungSerif text-3xl text-white">Interactive Memory Map</h4>
						<p>
							One of my favorite features is the interactive map that displays album pins, creating
							a visual journey of memories and experiences shared with friends. It's not about
							organizing photos by location, but rather providing a cute, intuitive way to visualize
							your adventures.
						</p>
						<ul class="mt-3 list-disc space-y-2 pl-5">
							<li>Implemented pin placement on Google Maps showing where albums were created</li>
							<li>Created a system that uses location data from photo metadata when available</li>
							<li>
								Built a Google Location API integration for manual tagging when users want to
								specify where an album was taken
							</li>
							<li>Added interactive pins that preview album content when clicked</li>
						</ul>
					</div>
					<div class="mt-6 flex justify-center">
						<img src="/Circles/Map.png" alt="Map View" class="w-7/12 shadow-lg" />
					</div>
				</div>
				<div
					class="flex flex-row-reverse items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0"
				>
					<div class="max-w-[700px] space-y-4">
						<h4 class="font-YoungSerif text-3xl text-white">Cloud-Based Photo Management</h4>
						<p>
							The photo upload system needed to handle multiple file types, sizes, and quantities
							while maintaining performance and reliability.
						</p>
						<ul class="mt-3 list-disc space-y-2 pl-5">
							<li>Built a multi-file upload system using Multer for initial processing</li>
							<li>
								Integrated with Cloudinary for cloud storage, image optimization, and delivery
							</li>
							<li>
								Created custom metadata extraction to preserve important photo information like
								location
							</li>
						</ul>
					</div>
					<div class="mt-6 flex justify-center">
						<!-- svelte-ignore a11y_img_redundant_alt -->
						<img src="/Circles/Upload.png" alt="Photo upload interface" class="w-7/12 shadow-lg" />
					</div>
				</div>
				<div class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0">
					<div class="max-w-[700px] space-y-4">
						<h4 class="font-YoungSerif text-3xl text-white">Real-Time Social Interactions</h4>
						<p>
							The notification system keeps users engaged by alerting them to activity relevant to
							their content and social connections.
						</p>
						<ul class="mt-3 list-disc space-y-2 pl-5">
							<li>
								Implemented WebSockets for instant bi-directional communication between server and
								clients
							</li>
							<li>
								Created different notification types for various social interactions (comments,
								likes, friend requests, circle invites)
							</li>
							<li>
								Built a persistent notification storage system so users wouldn't miss updates while
								offline
							</li>
						</ul>
					</div>
					<div class="mt-6 flex justify-center">
						<img src="/Circles/Activities.png" alt="Notification System" class="w-7/12 shadow-lg" />
					</div>
				</div>
			</div>
			<div
				class="{isFullscreen
					? 'px-[280px]'
					: '-[1090px] w-full '} flex flex-col justify-center space-y-4 text-start"
			>
				<h4 class="font-YoungSerif text-3xl text-white">Conclusion and Reflection</h4>
				<p>
					Circles is my first large team project, it is my first introduction to communication
					preferences, and varying levels of expertise among team members. Managing shared
					responsibilities and maintaining code consistency proved challenging as the project scope
					expanded beyond what any individual could easily oversee. Despite these difficulties, the
					experience of collaborating on Circles has almost certainly equipped me with invaluable
					teamwork skills that will serve as a foundation formy future development projects.
				</p>

				<p>
					Working on Circles taught me a lot about designing systems with complex social
					relationships and handling real-time data synchronization. It was especially rewarding to
					see how the map visualization transformed the way users viewed their memories, turning a
					collection of photos into an interactive journey of experiences shared with friends.
				</p>
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
									<a href="https://idsp-2-circles.fly.dev/" class="text-blue-400 hover:underline"
										>Live</a
									>
									<a
										href="https://github.com/angus-ng/IDSP-2-Circles"
										class="text-blue-400 hover:underline">GitHub Repository</a
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
									{#each projectData.frameworks as framework}
										<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
											>{framework}</span
										>
									{/each}
									<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">CSS</span>
								</div>
								<p class="mt-4">
									Built with vanilla HTML and JavaScript for a lightweight frontend that focuses on
									speed and compatibility. This approach kept the development focused on core
									functionality rather than framework-specific features.
								</p>
							</div>

							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">
									Backend & Database
								</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									{#each projectData.technologies.filter( (tech) => ['Express.js', 'Prisma', 'SQLite'].includes(tech) ) as tech}
										<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">{tech}</span
										>
									{/each}
								</div>
								<p class="mt-4">
									Express.js provides the API backbone, while Prisma ORM with SQLite handles the
									complex relationships between users, circles, albums, and photos with type-safe
									database queries.
								</p>
							</div>
						</div>

						<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">
									Photo Storage & Location
								</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									{#each projectData.technologies.filter( (tech) => ['Cloudinary', 'Google Maps API', 'Multer'].includes(tech) ) as tech}
										<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">{tech}</span
										>
									{/each}
								</div>
								<p class="mt-4">
									Multer handles file uploads, Cloudinary provides cloud storage and image
									processing, while Google Maps API powers the location-based photo organization
									features that give Circles its unique spatial dimension.
								</p>
							</div>

							<div>
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">
									Real-time Features
								</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									{#each projectData.technologies.filter( (tech) => ['Socket.io'].includes(tech) ) as tech}
										<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">{tech}</span
										>
									{/each}
								</div>
								<p class="mt-4">
									Socket.io power the real-time notification system, enabling instant updates for
									likes, comments, friend requests, and circle invitations without requiring page
									refreshes.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</MusicPlayerWrapper>
