<script lang="ts">
	import MusicPlayerWrapper from '../MusicPlayerWrapper.svelte';

	let isPlaying = $state(false);
	let isFullscreen = $state(false);

	const projectData = {
		title: 'Harmony',
		role: 'Fullstack Developer, Project Manager',
		timeline: 'Aug → Dec 2024',
		source: '我喜欢的音乐',
		technologies: ['Drizzle', 'Docker', 'Socket.io', 'SQLite', 'Claude', 'Langchain', 'Tailwind'],
		frameworks: ['Solid.js']
	} as const;
</script>

<MusicPlayerWrapper bind:isPlaying bind:isFullscreen>
	<div class={`flex h-full flex-col bg-zinc-900 p-5 ${isFullscreen ? ' w-full' : 'lg:w-2/3 '}`}>
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

				<!-- <div class="flex pb-5">
					<button class="rounded-full bg-zinc-700 px-4 py-2 text-sm text-white">歌词</button>
					<button class="rounded-full px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-700"
						>百科</button
					>
					<button class="rounded-full px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-700"
						>相似推荐</button
					>
				</div> -->
			</div>
			<div class="relative h-40 w-40 md:hidden">
				<div
					class="absolute flex items-start justify-center rounded-full
					{isPlaying ? 'animate-spin-slow' : ''}"
				>
					<div class=" overflow-hidden rounded-full shadow-lg">
						<img alt="CD" src="/CD.png" class="pointer-events-none" />
					</div>
				</div>
			</div>
		</div>

		<div class="h-full space-y-16 overflow-y-auto text-lg text-zinc-300 max-sm:overflow-scroll">
			<div class="flex items-center space-x-40">
				<div class="space-y-5">
					<h2 class="font-YoungSerif text-2xl text-white">AI-Assisted Caregiving Application</h2>
					<p>
						Harmony is a comprehensive caregiving platform designed to streamline and enhance the
						coordination of care for individuals. Using AI assistance, the application helps
						caregivers track health information, record appointments, and maintain detailed care
						journals—all within a collaborative team environment.
					</p>
				</div>
				<!-- <img
					src="/Harmony/Home.png"
					alt="Harmony Dashboard"
					class="max-h-[400px] rounded-lg shadow-lg"
				/> -->
			</div>

			<div class="space-y-8">
				<div class="space-y-4">
					<h3 class="font-YoungSerif text-2xl text-white">My Role & Contributions</h3>
					<p>
						As a full-stack developer on the Harmony team, I had primary responsibility for the
						calendar system—a core feature that serves as the central hub for care coordination. My
						work integrated with the journaling system to create a comprehensive care timeline. I
						also actively wrote meeting minutes for every team meeting, ensuring clear communication
						and accountability throughout the project.
					</p>
				</div>
				<div class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0">
					<div class="space-y-4">
						<h4 class="font-YoungSerif text-xl text-white">Custom Calendar Implementation</h4>
						<p>I built a custom calendar component from scratch, providing three distinct views:</p>
						<ul class="mt-3 list-disc space-y-2 pl-5">
							<li>
								Month View: Provides an overview of all care events and journal entries across a
								monthly timespan with color-coded categorization
							</li>
							<li>
								Week View: Offers a more detailed breakdown of scheduled appointments within a 7-day
								period with time-block visualization
							</li>
							<li>
								Day View: Presents a granular timeline of all care-related events for specific days
								with hourly precision
							</li>
						</ul>
					</div>
					<div class="mt-6 flex justify-center">
						<img
							src="/Harmony/Calendar.png"
							alt="Calendar Views"
							class="w-2/4 rounded-t-3xl shadow-lg"
						/>
					</div>
				</div>

				<div class="space-y-4">
					<h4 class="font-YoungSerif text-xl text-white">Journal-Calendar Integration</h4>
					<p>
						One of my key innovations was bridging the application's journaling and scheduling
						components:
					</p>
					<ul class="mt-3 list-disc space-y-2 pl-5">
						<li>Implemented a system to display journal entries directly within calendar views</li>
						<li>
							Created visualization cues to distinguish between scheduled events and documented
							journal entries
						</li>
					</ul>
				</div>

				<div class="space-y-4">
					<h4 class="font-YoungSerif text-xl text-white">Real-Time Notifications System</h4>
					<p>I implemented a comprehensive WebSocket-based notification system:</p>
					<ul class="mt-3 list-disc space-y-2 pl-5">
						<li>Created real-time pop-up notifications for calendar events and journal entries</li>
						<li>
							Developed assignment functionality allowing users to add team members for specific
							events
						</li>
					</ul>
				</div>

				<div class="space-y-4">
					<h4 class="font-YoungSerif text-xl text-white">Technical Implementation</h4>
					<p>I wrote both frontend and backend code for these features:</p>
					<ul class="mt-3 list-disc space-y-2 pl-5">
						<li>Frontend: Created responsive calendar interfaces with SolidJS</li>
						<li>Backend: Developed RESTful APIs for event creation, retrieval, and deletion</li>
						<li>Database: Designed schema for storing events and assignment relationships</li>
						<li>
							WebSockets: Implemented Socket.io for real-time updates across all connected clients
						</li>
					</ul>
				</div>

				<div class="space-y-4">
					<h4 class="font-YoungSerif text-xl text-white">Team Contributions</h4>
					<p>Beyond my direct responsibilities, I actively participated in:</p>
					<ul class="mt-3 list-disc space-y-2 pl-5">
						<li>Technology stack evaluation and selection (SolidJS, Drizzle, SQLite)</li>
						<li>System architecture planning for real-time updates using Socket.io</li>
						<li>Detailed meeting minutes documentation for every team meeting</li>
						<li>Sprint planning and task allocation using Agile methodologies</li>
					</ul>
				</div>
			</div>

			<div class="space-y-4">
				<h4 class="font-YoungSerif text-2xl text-white">Challenges & Solutions</h4>
				<p>The calendar feature presented several technical challenges:</p>

				<div class="mt-4 space-y-6">
					<div class="rounded-lg bg-zinc-800 p-4">
						<h5 class="mb-2 font-YoungSerif text-lg text-white">
							Building a Custom Calendar Component
						</h5>
						<p>
							Challenge: Off-the-shelf calendar components lacked the customization needed for our
							unique use case and didn't offer the visual event indicators we wanted.
						</p>
						<p class="mt-2">
							Solution: I made the decision to build a custom calendar system from scratch rather
							than using existing libraries. This gave me precise control over how the calendar
							looked and functioned:
						</p>
						<ul class="mt-2 list-disc space-y-1 pl-5">
							<li>
								Created a visual indicator system with colored dots under each date, showing at a
								glance which days had events
							</li>
							<li>
								Designed the dots to reflect different types of entries - different colors for
								different journal entry types and event categories
							</li>
							<li>
								Implemented logic to display multiple dots when a date contained multiple entries
							</li>
						</ul>
					</div>

					<div class="rounded-lg bg-zinc-800 p-4">
						<h5 class="mb-2 font-YoungSerif text-lg text-white">Data Synchronization</h5>
						<p>Challenge: Ensuring all team members saw real-time updates without conflicts.</p>
						<p class="mt-2">
							Solution: Designed a WebSocket architecture with Socket.io to broadcast changes
							instantly to all connected clients. Implemented optimistic UI updates combined with
							server validation to maintain data integrity while providing a responsive user
							experience.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</MusicPlayerWrapper>
