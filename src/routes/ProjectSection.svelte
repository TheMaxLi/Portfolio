<script lang="ts">
	import Project from '$lib/components/Project/Project.svelte';
	import ExitButton from './project/ExitButton.svelte';

	const PROJECTS = [
		{
			title: 'Harmony',
			desc: `	A collaborative caretaking app designed to streamline caregiving tasks like journaling, medication
				reminders, and appointment tracking. Built with 
				<a target="_blank" class="text-orange-400 underline" href="https://www.solidjs.com/">Solid.js</a>,
				<a target="_blank" class="text-orange-400 underline" href="https://start.solidjs.com/">SolidStart</a>, 
				and
				<a target="_blank" class="text-orange-400 underline" href="https://www.langchain.com/">Langchain</a>
				for task automation.`,
			src: '/Harmony/Harmony.webp',
			reverse: false,
			link: 'https://solid-app.fly.dev/',
			alt: 'Screenshots of Harmony app',
			chips: ['Full stack', 'Team Project']
		},
		{
			title: 'Circles',
			desc: `A social media platform for close friends to create groups, share photo albums,
			 	and collaborate in real-time. Built with 				
				<a target="_blank" class="text-orange-400 underline" href="https://devdocs.io/html/">vanilla HTML</a>,
				<a target="_blank" class="text-orange-400 underline" href="https://www.typescriptlang.org/docs/">Typescript</a>,
				and 
				<a target="_blank" class="text-orange-400 underline" href="https://expressjs.com/">Express.js</a>,.`,
			src: '/Circles/CirclesLight.webp',
			reverse: true,
			link: 'https://idsp-2-circles.fly.dev/',
			alt: 'Screenshots of Circles app',
			chips: ['Full stack', 'Team Project']
		},
		{
			title: 'Mina Bites',
			desc: `A restaurant discovery and planning app inspired by my love for exploring
				new dining experiences. Built with 
				<a target="_blank" class="text-orange-400 underline" href="https://svelte.dev/">Svelte</a>,
				<a target="_blank" class="text-orange-400 underline" href="https://svelte.dev/docs/kit/introduction">SvelteKit</a>,
				and
				<a target="_blank" class="text-orange-400 underline" href="https://location.foursquare.com/developer/">FourSqaure API</a>.`,
			src: '/MinaBites/MinaBites.webp',
			reverse: false,
			chips: ['Full stack', 'Design', 'Solo'],
			id: 'MinaBites',
			link: 'https://mina-bites-kh7k.vercel.app/',
			alt: 'Screenshot of Mina-Bites app'
		},
		{
			title: 'Green Basil',
			desc: `A website redesign and development where I led the architecture and mentored new developers, focusing on system design and code quality. Built with 
				<a target="_blank" class="text-orange-400 underline" href="https://svelte.dev/">Svelte</a>
				and
				<a target="_blank" class="text-orange-400 underline" href="https://svelte.dev/docs/kit/introduction">SvelteKit</a>.`,
			desc: `Redesign and development of the Green Basil website, a thai restaurant in Metro Burnaby. 
				The project involved creating a new design and implementing it using 
				<a target="_blank" class="text-orange-400 underline" href="https://svelte.dev/">Svelte</a>,
				and 
				<a target="_blank" class="text-orange-400 underline" href="https://tailwindcss.com/">Tailwind CSS</a>.`,
			src: '/GreenBasil/GreenBasil.png',
			reverse: true,
			chips: ['Architect lead', 'Team Project'],
			id: 'GreenBasil'
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
