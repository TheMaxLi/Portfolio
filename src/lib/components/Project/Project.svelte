<script lang="ts">
	import { goto } from '$app/navigation';
	import ProjectImageWrapper from './ProjectImageWrapper.svelte';

	let {
		title = 'not available',
		desc,
		src = '',
		reverse = false,
		alt = '',
		id = '',
		chips = ['']
	} = $props();

	function handleNavigate(event: Event) {
		event.preventDefault();
		event.stopPropagation();
		goto(`project/${link}`);
	}

	let link = id ? id.toLowerCase() : title.toLowerCase();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="flex w-full flex-col gap-8 pt-[50px] last:pb-[150px] md:pb-[100px] md:pt-[100px] lg:flex-row lg:gap-24 {reverse
		? 'lg:flex-row-reverse'
		: ''} "
	id={id ? id : title}
>
	<ProjectImageWrapper src={`project/${link}`}>
		<img {src} {alt} class="h-full max-h-[600px] w-full max-w-[824px]" />
	</ProjectImageWrapper>
	<div class="flex max-w-[400px] flex-col gap-5 text-[#CFD1CF]">
		<div class="flex flex-col gap-2">
			<button onclick={(e) => handleNavigate(e)} class="flex justify-start">
				<h1
					class="font-YoungSerif text-4xl [text-shadow:_0px_0px_10px_rgb(255_255_255_/_0.60)] md:text-5xl lg:text-6xl"
				>
					{title}
				</h1>
			</button>
			<div class="flex flex-wrap gap-2">
				{#each chips as chip}
					<span class="rounded-full bg-zinc-800 px-3 py-1 text-sm">
						{chip}
					</span>
				{/each}
			</div>
		</div>
		<p class="text-lg">{@html desc}</p>
		<div>
			<button
				onclick={(e) => handleNavigate(e)}
				class="rounded- border-2 border-[#CFD1CF] px-3 py-1 hover:[box-shadow:_0px_0px_10px_rgb(255_255_255_/_1.00)]"
				>Learn More</button
			>
		</div>
	</div>
</div>
