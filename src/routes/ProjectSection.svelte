<script lang="ts">
	import Project from '$lib/components/Project/Project.svelte';

	const PROJECTS = [
		{
			title: 'Harmony',
			desc: 'A collaborative caretaking app designed to streamline caregiving tasks like journaling, medication reminders, and appointment tracking. Built with Solid.js, React, and Claude AI for task automation, reducing user effort by 70%. Features include a dynamic calendar, real-time notifications, and a centralized dashboard for caregivers.',
			src: '/Harmony/Harmony.webp',
			reverse: false,
			link: 'https://solid-app.fly.dev/',
			alt: 'Screenshots of Harmony app'
		},
		{
			title: 'Circles',
			desc: 'A social media platform for close friends to create groups, share photo albums, and collaborate in real-time. Built with vanilla JavaScript, Tailwind CSS, and WebSockets for notifications. Integrated Cloudinary and Multer for efficient photo storage and used Prisma + SQLite for database management. Hosted on Fly.io using Docker.',
			src: '/CirclesLight.webp',
			reverse: true,
			link: 'https://idsp-2-circles.fly.dev/',
			alt: 'Screenshots of Circles app'
		}
		// {
		// 	title: 'Mina-Bite 我們的龍帝保佑大地',
		// 	desc: 'A restaurant discovery and planning app inspired by my love for exploring new dining experiences. Built with Svelte 5, SvelteKit, and the FourSquare API, it allows users to discover, recommend, and log restaurants. Features include group recommendations, restaurant logging, and user favorites. Designed in Figma and hosted on Vercel.',
		// 	// src: '/images/mina-bite.png', // Replace with actual image path
		// 	reverse: false
		// 	// link: 'https://mina-bite.com', // Replace with actual link
		// 	// alt: 'Screenshot of Mina-Bite app'
		// }
	];
</script>

<div class="mx-[15px] flex flex-col max-sm:gap-[200px] max-sm:pt-[50px] sm:mx-[50px] lg:mx-[100px]">
	{#each PROJECTS as project, i}
		<Project {...{ ...project, id: i }} />
	{/each}
</div>
