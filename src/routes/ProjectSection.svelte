<script lang="ts">
	import Project from '$lib/components/Project/Project.svelte';

	const PROJECTS = [
		{
			title: 'Harmony',
			desc: 'A collaborative caretaking app designed to streamline caregiving tasks like journaling, medication reminders, and appointment tracking. Built with Solid.js, SolidStart, and Claude AI for task automation.',
			src: '/Harmony/Harmony.webp',
			reverse: false,
			link: 'https://solid-app.fly.dev/',
			alt: 'Screenshots of Harmony app',
			chips: ['Full stack', 'Team Project']
		},
		{
			title: 'Circles',
			desc: 'A social media platform for close friends to create groups, share photo albums, and collaborate in real-time. Built with vanilla HTML, Typescript, and Express.js.',
			src: '/Circles/CirclesLight.webp',
			reverse: true,
			link: 'https://idsp-2-circles.fly.dev/',
			alt: 'Screenshots of Circles app',
			chips: ['Full stack', 'Team Project']
		},
		{
			title: 'Mina Bites',
			desc: 'A restaurant discovery and planning app inspired by my love for exploring new dining experiences. Features include restaurant search, group creation and collaborated recommendations.',
			src: '/MinaBites/MinaBites.webp',
			reverse: false,
			chips: ['Full stack', 'Design', 'Solo'],
			id: 'MinaBites',
			// link: 'https://mina-bite.com',
			alt: 'Screenshot of Mina-Bites app'
		},
		{
			title: 'Green Basil',
			desc: 'Under Construction!',
			src: '/GreenBasil/GreenBasil.png',
			reverse: true,
			chips: ['Architect lead', 'Team Project'],
			id: 'GreenBasil'
			// link: 'https://mina-bite.com',
			// alt: 'Screenshot of Mina-Bite app'
		},
		{
			title: 'Rhythm Shu',
			desc: 'Under Construction!',
			src: '/RhythmShu/RhythmShu.png',
			reverse: false,
			chips: ['Full stack', 'Solo'],
			id: 'RhythmShu'
			// link: 'https://mina-bite.com',
			// alt: 'Screenshot of Mina-Bite app'
		}
	];
</script>

<div class="mx-[15px] flex flex-col max-sm:gap-[100px] max-sm:pt-[50px] sm:mx-[50px] lg:mx-[100px]">
	{#each PROJECTS as project, i}
		<Project {...{ ...project }} />
	{/each}
</div>
