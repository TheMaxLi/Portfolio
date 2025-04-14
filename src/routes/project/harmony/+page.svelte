<script lang="ts">
	import type { ProjectData } from '$lib/utils/ProjectDataType';
	import MusicPlayerWrapper from '../MusicPlayerWrapper.svelte';

	let isPlaying = $state(false);
	let isFullscreen = $state(false);
	let activeView = $state<'lyrics' | 'wiki'>('lyrics');

	const projectData: ProjectData = {
		title: 'Harmony',
		role: 'Fullstack Developer, Project Manager',
		timeline: 'Aug → Dec 2024',
		source: '我喜欢的音乐',
		technologies: ['Drizzle', 'Docker', 'Socket.io', 'SQLite', 'Claude', 'Langchain', 'Tailwind'],
		frameworks: ['Solid.js'],
		nextProject: '/project/circles',
		previousProject: null
	};
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
						class="rounded-full {activeView === 'lyrics'
							? 'bg-zinc-700 text-white'
							: 'text-zinc-400 hover:bg-zinc-700'} px-4 py-2 text-sm"
						onclick={() => (activeView = 'lyrics')}>歌词</button
					>
					<button
						class="rounded-full px-4 py-2 text-sm {activeView === 'wiki'
							? 'bg-zinc-700 text-white'
							: 'text-zinc-400 hover:bg-zinc-700'}"
						onclick={() => (activeView = 'wiki')}>百科</button
					>
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

		{#if activeView === 'lyrics'}
			<div
				class="flex h-full w-full flex-col items-center space-y-16 overflow-y-auto pb-10 text-lg text-zinc-300 max-sm:overflow-scroll"
			>
				<div
					class="flex items-center space-x-40 {isFullscreen ? 'px-[280px]' : '-[1090px] w-full '} "
				>
					<div class="space-y-5">
						<h2 class="font-YoungSerif text-3xl text-white">AI-Assisted Caregiving Application</h2>
						<p>
							Harmony is a comprehensive caregiving platform designed to streamline care
							coordination for individuals. Using AI assistance, the application helps caregivers
							track health information, record appointments, and maintain detailed care journals—all
							within a collaborative team environment.
						</p>
					</div>
				</div>

				<div
					class="flex items-center space-x-40 {isFullscreen ? 'px-[280px]' : '-[1090px] w-full '} "
				>
					<div class="space-y-5">
						<h2 class="font-YoungSerif text-3xl text-white">Development Process</h2>
						<p>
							When approaching the calendar implementation, I began by analyzing the designer's
							mockups and identifying the technical requirements needed to bring their vision to
							life. I worked closely with the design team to understand the intended user experience
							across the day, week, and month views. From there, I established the data structures
							and API endpoints necessary to support the calendar functionality.
						</p>
						<p>
							The journal-calendar integration concept came from team discussions about enhancing
							the app's usefulness. While I didn't design the interface, I proposed the technical
							approach for connecting these two features and implemented the bidirectional data flow
							needed to make this integration work seamlessly.
						</p>
					</div>
				</div>
				<div class="flex flex-col items-center">
					<div
						class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0"
					>
						<div class="max-w-[700px] space-y-4">
							<h4 class="font-YoungSerif text-3xl text-white">Custom Calendar Implementation</h4>
							<p>
								The calendar system serves as Harmony's central coordination tool. Users can toggle
								between day, week, and month views to plan and track caregiving activities at
								different levels of detail.
							</p>
							<ul class="mt-3 list-disc space-y-2 pl-5">
								<li>
									Day view: Shows an hourly scheduling layout, including event positioning, and
									overlap handling.
								</li>
								<li>
									Week View: Offers a more detailed breakdown of scheduled appointments within a
									7-day period with time-block visualization
								</li>
								<li>
									Month View: Provides an overview of all care events and journal entries across a
									monthly timespan with color-coded categorization.
								</li>
							</ul>
						</div>
						<div class="mt-6 flex justify-center">
							<img
								src="/Harmony/MonthView.png"
								alt="Calendar Month View"
								class="w-7/12 shadow-lg"
							/>
						</div>
					</div>
					<div
						class="flex flex-row-reverse items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0"
					>
						<div class="max-w-[700px] space-y-4">
							<h4 class="font-YoungSerif text-3xl text-white">Journal-Calendar Integration</h4>
							<p>
								The journal-calendar integration concept came from team discussions about
								representing the connection between care observations and scheduled events.
							</p>
							<ul class="mt-3 list-disc space-y-2 pl-5">
								<li>
									Implemented a system to display journal entries directly within calendar views
								</li>
								<li>
									Created visualization cues to distinguish between scheduled events and documented
									journal entries
								</li>
							</ul>
						</div>
						<div class="mt-6 flex justify-center">
							<img
								src="/Harmony/Journal.png"
								alt="Calendar with journal info"
								class="w-7/12 shadow-lg"
							/>
						</div>
					</div>
					<div
						class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0"
					>
						<div class="max-w-[700px] space-y-4">
							<h4 class="font-YoungSerif text-3xl text-white">Real-Time Notifications System</h4>
							<p>
								The notification system ensures that all team members stay informed about critical
								updates without requiring manual checks.
							</p>
							<ul class="mt-3 list-disc space-y-2 pl-5">
								<li>
									Created real-time pop-up notifications for calendar events and journal entries
								</li>
								<li>
									Developed assignment functionality allowing users to add team members for specific
									events
								</li>
							</ul>
						</div>
						<div class="mt-6 flex justify-center">
							<img src="/Harmony/Notification.png" alt="Calendar Views" class="w-7/12 shadow-lg" />
						</div>
					</div>
				</div>

				<div
					class="space-y-4 {isFullscreen
						? 'px-[280px]'
						: '-[1090px] w-full '} flex flex-col justify-center text-start"
				>
					<h4 class="font-YoungSerif text-3xl text-white">Team Contributions</h4>
					<p>Beyond my direct responsibilities, I actively participated in:</p>
					<ul class="mt-3 list-disc space-y-2 pl-5">
						<li>Technology stack evaluation and selection (SolidJS, Drizzle, SQLite)</li>
						<li>System architecture planning for real-time updates using Socket.io</li>
						<li>Detailed meeting minutes documentation for every team meeting</li>
						<li>Sprint planning and task allocation using Agile methodologies</li>
					</ul>
				</div>
				<div
					class="{isFullscreen
						? 'px-[280px]'
						: '-[1090px] w-full '} flex flex-col justify-center space-y-4 text-start"
				>
					<h4 class="font-YoungSerif text-3xl text-white">Conclusion and Reflection</h4>
					<p>
						Working on Harmony reinforced the importance of close collaboration between developers
						and designers. While I didn't create the visual designs, my implementation work was
						crucial in bringing those designs to life as functional, performant features.
					</p>
					<p>
						If I were to approach this project again, I would advocate for earlier user testing to
						identify potential issues earlier. Additionally, I would implement more comprehensive
						automated testing from the beginning to ensure the features remained stable through
						iterations.
					</p>
					<p>Given additional time, I would expand the calendar system to include:</p>
					<ul class="mt-3 list-disc space-y-2 pl-5">
						<li>Medication reminders</li>
						<li>Advanced recurrence patterns for regularly scheduled care activities</li>
						<li>
							AI-powered suggestions for optimizing care schedules based on historical patterns
						</li>
						<li>Integration with external healthcare provider calendars</li>
					</ul>
					<p>
						This project strengthened my skills in translating design specifications into
						functioning code while maintaining performance and reliability. It also demonstrated my
						ability to architect complex data relationships, like the journal-calendar integration,
						that enhance the overall user experience.
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
										<a href="https://solid-app.fly.dev/" class="text-blue-400 hover:underline"
											>Live</a
										>
										<a
											href="https://github.com/Vakiyama/harmony"
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
									<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">Framework</h4>
									<div class="mt-2 flex flex-wrap gap-2">
										{#each projectData.frameworks as framework}
											<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
												>{framework}</span
											>
										{/each}
									</div>
									<p class="mt-4">
										Solid.js was chosen for its reactive primitives and efficient DOM updates,
										allowing for high-performance interface components critical for the calendar
										system.
									</p>
								</div>

								<div>
									<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">
										Backend & Data
									</h4>
									<div class="mt-2 flex flex-wrap gap-2">
										{#each projectData.technologies.filter( (tech) => ['Drizzle', 'SQLite'].includes(tech) ) as tech}
											<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
												>{tech}</span
											>
										{/each}
									</div>
									<p class="mt-4">
										Drizzle ORM with SQLite provides a lightweight yet powerful database solution.
									</p>
								</div>
							</div>

							<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
								<div>
									<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">
										AI Integration
									</h4>
									<div class="mt-2 flex flex-wrap gap-2">
										{#each projectData.technologies.filter( (tech) => ['Anthropic API', 'Langchain'].includes(tech) ) as tech}
											<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
												>{tech}</span
											>
										{/each}
									</div>
									<p class="mt-4">
										Claude's language model combined with Langchain provides intelligent assistance
										for caregivers, offering insights from journal entries and health records.
									</p>
								</div>

								<div>
									<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">
										Real-time Features
									</h4>
									<div class="mt-2 flex flex-wrap gap-2">
										{#each projectData.technologies.filter( (tech) => ['Socket.io', 'Docker'].includes(tech) ) as tech}
											<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
												>{tech}</span
											>
										{/each}
									</div>
									<p class="mt-4">
										Socket.io enables real-time notifications and updates across all care team
										members, while Docker ensures consistent deployment environments.
									</p>
								</div>
							</div>

							<div class="mt-8">
								<h4 class="mb-2 text-sm uppercase tracking-wider text-zinc-400">UI Development</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									{#each projectData.technologies.filter( (tech) => ['Tailwind'].includes(tech) ) as tech}
										<span class="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">{tech}</span
										>
									{/each}
								</div>
								<p class="mt-4">
									Tailwind CSS provides utility-first styling that enabled rapid development of the
									complex user interface components, particularly for the customized calendar views.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</MusicPlayerWrapper>
