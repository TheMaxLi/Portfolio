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
			'WebSockets',
			'Multer'
		],
		frameworks: ['HTML/JavaScript'],
		nextProject: null,
		previousProject: '/project/harmony'
	};

	function toggleView(view: 'lyrics' | 'wiki') {
		activeView = view;
	}
</script>

<MusicPlayerWrapper bind:isPlaying bind:isFullscreen {projectData}>
	<div class={`flex h-full flex-col bg-zinc-900 p-5 ${isFullscreen ? ' w-full' : 'lg:w-[99%] '}`}>
		<div class="mb-5 flex w-full justify-between border-b border-zinc-700">
			<div class="w-full">
				<div class="mb-4">
					<h1 class="font-YoungSerif text-4xl [text-shadow:_0px_0px_10px_rgb(255_255_255_/_0.60)]">
						{projectData.title}
					</h1>
				</div>

				<div class="mb-5 flex flex-wrap gap-3 text-sm text-zinc-300">
					<span>Timeline: {projectData.timeline}</span>
				</div>

				<div class="flex space-x-2 pb-5">
					<button
						class="rounded-full px-4 py-2 text-sm {activeView === 'lyrics'
							? 'bg-zinc-700 text-white'
							: 'text-zinc-400 hover:bg-zinc-700'}"
						onclick={() => toggleView('lyrics')}
					>
						歌词
					</button>
					<button
						class="rounded-full px-4 py-2 text-sm {activeView === 'wiki'
							? 'bg-zinc-700 text-white'
							: 'text-zinc-400 hover:bg-zinc-700'}"
						onclick={() => toggleView('wiki')}
					>
						百科
					</button>
				</div>
			</div>
			<div class="relative h-40 w-40 lg:hidden">
				<div
					class="absolute flex items-start justify-center rounded-full
					{isPlaying ? 'animate-spin-slow' : ''}"
				>
					<div class=" overflow-hidden rounded-full shadow-lg">
						<img alt="CD" src="/CD.webp" class="pointer-events-none" />
					</div>
				</div>
			</div>
		</div>

		<!-- Lyrics view (original content) -->
		{#if activeView === 'lyrics'}
			<div
				class="flex h-full w-full flex-col items-center space-y-16 overflow-y-auto pb-10 text-lg text-zinc-300 max-sm:overflow-scroll"
			>
				<div
					class="flex items-center space-x-40 {isFullscreen ? 'px-[280px]' : '-[1090px] w-full '} "
				>
					<div class="space-y-5">
						<h2 class="font-YoungSerif text-3xl text-white">
							Social Media-Enabled Photo Organizer
						</h2>
						<p>
							Circles is a photo sharing and organization platform that bridges the gap between
							organized cloud storage and social media. It is envisioned as Google Drive but with
							social features — allowing friends to create groups, share albums, and interact with
							each other's content in a more personal and organized way than traditional photo
							sharing platforms.
						</p>
					</div>
				</div>

				<!-- <div
					class="flex items-center space-x-40 {isFullscreen ? 'px-[280px]' : '-[1090px] w-full '} "
				>
					<div class="space-y-5">
						<h2 class="font-YoungSerif text-3xl text-white">Development Approach</h2>
						<p>
							When building Circles, I focused on implementing features where content organization
							and social interaction merged. The application needed to handle complex relationship
							structures between users, groups ("circles"), albums, and individual photos, while
							maintaining an intuitive user experience that wouldn't overwhelm users with options.
						</p>
						<p>
							For the tech stack, My team and I chose Express.js for its flexibility and Prisma with
							SQLite for a lightweight yet powerful database with an ORM that is simple to use while
							being able to write SQL queries for complex queries like getting nested comments. The
							frontend used vanilla HTML and JavaScript as it felt like a fun challenge due to the
							current web development landscape being dominated by frameworks. We wanted to see how
							far we could push the limits of a simple HTML/JS/CSS stack while still providing a
							modern user experience.
						</p>
					</div>
				</div> -->
				<div class="flex flex-col items-center">
					<div
						class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0"
					>
						<div class="max-w-[700px] space-y-4">
							<h4 class="font-YoungSerif text-3xl text-white">Interactive Memory Map</h4>
							<p>
								One of my favorite features is the interactive map that displays album pins,
								creating a visual journey of memories and experiences shared with friends. It's not
								about organizing photos by location, but rather providing a cute, intuitive way to
								visualize your adventures.
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
							<img
								src="/Circles/Upload.png"
								alt="Photo upload interface"
								class="w-7/12 shadow-lg"
							/>
						</div>
					</div>
					<div
						class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0"
					>
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
									Built a persistent notification storage system so users wouldn't miss updates
									while offline
								</li>
							</ul>
						</div>
						<div class="mt-6 flex justify-center">
							<img
								src="/Circles/Activities.png"
								alt="Notification System"
								class="w-7/12 shadow-lg"
							/>
						</div>
					</div>
				</div>

				<!-- <div
					class="space-y-4 {isFullscreen
						? 'px-[280px]'
						: '-[1090px] w-full '} flex flex-col justify-center text-start"
				>
					<h4 class="font-YoungSerif text-3xl text-white">Social Relationship Management</h4>
					<p>
						The social features of Circles required complex relationship modeling in the database:
					</p>
					<ul class="mt-3 list-disc space-y-2 pl-5">
						<li>Friend request system with pending/accepted states and real-time updates</li>
						<li>Circle (group) creation with owner/member permissions and invitation system</li>
						<li>Album access control based on circle membership and sharing settings</li>
						<li>User activity feeds showing relevant updates from their social connections</li>
					</ul>
				</div> -->
				<div
					class="{isFullscreen
						? 'px-[280px]'
						: '-[1090px] w-full '} flex flex-col justify-center space-y-4 text-start"
				>
					<h4 class="font-YoungSerif text-3xl text-white">Conclusion and Reflection</h4>
					<p>
						Circles is my first large team project, it is my first introduction to communication
						preferences, and varying levels of expertise among team members. Managing shared
						responsibilities and maintaining code consistency proved challenging as the project
						scope expanded beyond what any individual could easily oversee. Despite these
						difficulties, the experience of collaborating on Circles has almost certainly equipped
						me with invaluable teamwork skills that will serve as a foundation formy future
						development projects.
					</p>
					<p>If I had more time to work on Circles, I would add these features:</p>
					<ul class="mt-3 list-disc space-y-2 pl-5">
						<li>AI-powered photo tagging and categorization</li>
						<li>
							More advanced permissions systems for sharing specific photos rather than entire
							albums
						</li>
						<li>Integration with existing social platforms for easier friend discovery</li>
						<li>A mobile app version using React Native to complement the web application</li>
					</ul>
					<p>
						Working on Circles taught me a lot about designing systems with complex social
						relationships and handling real-time data synchronization. It was especially rewarding
						to see how the map visualization transformed the way users viewed their memories,
						turning a collection of photos into an interactive journey of experiences shared with
						friends.
					</p>
				</div>
			</div>
		{:else}
			<!-- Wiki view (tech stack and project details) -->
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
										Built with vanilla HTML and JavaScript for a lightweight frontend that focuses
										on speed and compatibility. This approach kept the development focused on core
										functionality rather than framework-specific features.
									</p>
								</div>

								<div>
									<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">
										Backend & Database
									</h4>
									<div class="mt-2 flex flex-wrap gap-2">
										{#each projectData.technologies.filter( (tech) => ['Express.js', 'Prisma', 'SQLite'].includes(tech) ) as tech}
											<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
												>{tech}</span
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
											<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
												>{tech}</span
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
										{#each projectData.technologies.filter( (tech) => ['WebSockets'].includes(tech) ) as tech}
											<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
												>{tech}</span
											>
										{/each}
									</div>
									<p class="mt-4">
										WebSockets power the real-time notification system, enabling instant updates for
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
	</div>
</MusicPlayerWrapper>
