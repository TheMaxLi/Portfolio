<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	const PROJECTS = [
		{
			title: 'Harmony',
			desc: 'A collaborative caretaking app designed to streamline caregiving tasks like journaling, medication reminders, and appointment tracking. Built with Solid.js, React, and Claude AI for task automation, reducing user effort by 70%. Features include a dynamic calendar, real-time notifications, and a centralized dashboard for caregivers.',
			// src: '/images/harmony.png', // Replace with actual image path
			reverse: false
			// link: 'https://harmony-app.com', // Replace with actual link
			// alt: 'Screenshot of Harmony app'
		},
		{
			title: 'Circles',
			desc: 'A social media platform for close friends to create groups, share photo albums, and collaborate in real-time. Built with vanilla JavaScript, Tailwind CSS, and WebSockets for notifications. Integrated Cloudinary and Multer for efficient photo storage and used Prisma + SQLite for database management. Hosted on Fly.io using Docker.',
			// src: '/images/circles.png', // Replace with actual image path
			reverse: true
			// link: 'https://circles-app.com', // Replace with actual link
			// alt: 'Screenshot of Circles app'
		},
		{
			title: 'Mina-Bite',
			desc: 'A restaurant discovery and planning app inspired by my love for exploring new dining experiences. Built with Svelte 5, SvelteKit, and the FourSquare API, it allows users to discover, recommend, and log restaurants. Features include group recommendations, restaurant logging, and user favorites. Designed in Figma and hosted on Vercel.',
			// src: '/images/mina-bite.png', // Replace with actual image path
			reverse: false
			// link: 'https://mina-bite.com', // Replace with actual link
			// alt: 'Screenshot of Mina-Bite app'
		}
	];
</script>

<div class="mx-20 flex flex-col">
	{#each PROJECTS as project}
		<Project {...project} />
	{/each}
</div>
