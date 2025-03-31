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
						Harmony is a comprehensive caregiving platform designed to streamline the coordination
						of care for individuals. Using AI assistance, the application helps caregivers track
						health information, record appointments, and maintain detailed care journals—all within
						a collaborative team environment.
					</p>
				</div>
				<!-- <img
					src="/Harmony/Home.png"
					alt="Harmony Dashboard"
					class="max-h-[400px] rounded-lg shadow-lg"
				/> -->
			</div>

			<div class="flex items-center space-x-40">
				<div class="space-y-5">
					<h2 class="font-YoungSerif text-2xl text-white">Development Process</h2>
					<p>
						When approaching the calendar implementation, I began by analyzing the designer's
						mockups and identifying the technical requirements needed to bring their vision to life.
						I worked closely with the design team to understand the intended user experience across
						the day, week, and month views. From there, I established the data structures and API
						endpoints necessary to support the calendar functionality.
					</p>
					<p>
						The journal-calendar integration concept came from team discussions about enhancing the
						app's usefulness. While I didn't design the interface, I proposed the technical approach
						for connecting these two features and implemented the bidirectional data flow needed to
						make this integration work seamlessly.
					</p>
				</div>
				<!-- <img
					src="/Harmony/Home.png"
					alt="Harmony Dashboard"
					class="max-h-[400px] rounded-lg shadow-lg"
				/> -->
			</div>

			<div class="space-y-16">
				<div class="flex items-center justify-between max-md:flex-col max-md:space-x-0 max-md:pr-0">
					<div class="space-y-4">
						<h4 class="font-YoungSerif text-2xl text-white">Custom Calendar Implementation</h4>
						<p>
							The calendar system serves as the central coordination tool within Harmony. Users can
							toggle between day, week, and month views to plan and track caregiving activities at
							different levels of detail.
						</p>
						<ul class="mt-3 list-disc space-y-2 pl-5">
							<li>
								Day view: Shows an hourly scheduling layout, including event positioning, and
								overlap handling.
							</li>
							<li>
								Week View: Offers a more detailed breakdown of scheduled appointments within a 7-day
								period with time-block visualization
							</li>
							<li>
								Month View: Provides an overview of all care events and journal entries across a
								monthly timespan with color-coded categorization.
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
					<h4 class="font-YoungSerif text-2xl text-white">Journal-Calendar Integration</h4>
					<p>
						The journal-calendar integration concept came from team discussions about representing
						the connection between care observations and scheduled events.
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
					<h4 class="font-YoungSerif text-2xl text-white">Real-Time Notifications System</h4>
					<p>
						The notification system ensures that all team members stay informed about critical
						updates without requiring manual checks.
					</p>
					<ul class="mt-3 list-disc space-y-2 pl-5">
						<li>Created real-time pop-up notifications for calendar events and journal entries</li>
						<li>
							Developed assignment functionality allowing users to add team members for specific
							events
						</li>
					</ul>
				</div>

				<div class="space-y-4">
					<h4 class="font-YoungSerif text-2xl text-white">Team Contributions</h4>
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
				<h4 class="font-YoungSerif text-2xl text-white">Conclusion and Reflection</h4>
				<p>
					Working on Harmony reinforced the importance of close collaboration between developers and
					designers. While I didn't create the visual designs, my implementation work was crucial in
					bringing those designs to life as functional, performant features.
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
					<li>AI-powered suggestions for optimizing care schedules based on historical patterns</li>
					<li>Integration with external healthcare provider calendars</li>
				</ul>
				<p>
					This project strengthened my skills in translating design specifications into functioning
					code while maintaining performance and reliability. It also demonstrated my ability to
					architect complex data relationships, like the journal-calendar integration, that enhance
					the overall user experience.
				</p>
			</div>
		</div>
	</div>
</MusicPlayerWrapper>
