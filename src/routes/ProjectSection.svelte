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
			desc: 'A restaurant discovery and planning app inspired by my love for exploring new dining experiences. Built with Svelte 5, SvelteKit, and the FourSquare API, it allows users to discover, recommend, and log restaurants. Features include group recommendations, restaurant logging, and user favorites. Designed in Figma and hosted on Vercel.',
			src: '/MinaBites/MinaBites.png', // Replace with actual image path
			reverse: false,
			chips: ['Full stack', 'Figma', 'Solo'],
			id: 'MinaBites'
			// link: 'https://mina-bite.com', // Replace with actual link
			// alt: 'Screenshot of Mina-Bite app'
		},
		{
			title: 'Green Basil',
			desc: 'Work in progress',
			src: '/GreenBasil/GreenBasil.png',
			reverse: true,
			chips: ['Architect lead', 'Team Project'],
			id: 'GreenBasil'
			// link: 'https://mina-bite.com', // Replace with actual link
			// alt: 'Screenshot of Mina-Bite app'
		}
	];
</script>

<div class="mx-[15px] flex flex-col max-sm:gap-[200px] max-sm:pt-[50px] sm:mx-[50px] lg:mx-[100px]">
	{#each PROJECTS as project, i}
		<Project {...{ ...project }} />
	{/each}
</div>
