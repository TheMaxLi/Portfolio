<script lang="ts">
	import { goto } from '$app/navigation';
	import ProjectImageWrapper from './ProjectImageWrapper.svelte';

	let {
		title = 'not available',
		desc = 'not available',
		src = '',
		reverse = false,
		link = '',
		alt = '',
		id
	} = $props();

	function handleNavigate(event: Event, src: string) {
		event.preventDefault();
		event.stopPropagation();
		goto(`project/${title.toLowerCase()}`);
	}
</script>

<div
	class="flex w-full flex-col gap-8 pt-[50px] last:pb-[200px] md:pb-[100px] md:pt-[100px] lg:flex-row lg:gap-24 {reverse
		? 'lg:flex-row-reverse'
		: ''} "
	id={title}
>
	<ProjectImageWrapper src={`project/${title.toLowerCase()}`}>
		<img {src} {alt} class="h-full max-h-[600px] w-full max-w-[824px]" />
	</ProjectImageWrapper>
	<div class="flex max-w-96 flex-col gap-5 text-[#CFD1CF]">
		<button onclick={(e) => handleNavigate(e, src)} class="flex justify-start">
			<h1 class="font-YoungSerif text-6xl [text-shadow:_0px_0px_10px_rgb(255_255_255_/_0.60)]">
				{!reverse ? '←' : ''}
				{title}
				{reverse ? '→' : ''}
			</h1>
		</button>
		<!-- chips -->
		<!-- <div class="flex flex-wrap gap-2">
			{#each ['Svelte', 'TypeScript', 'TailwindCSS'] as tech}
				<span class="rounded-full bg-gray-800 px-3 py-1 text-sm text-white">
					{tech}
				</span>
			{/each}
		</div> -->
		<p class="text-lg">{desc}</p>
	</div>
</div>
