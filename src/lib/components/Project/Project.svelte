<script lang="ts">
	import ProjectImageWrapper from './ProjectImageWrapper.svelte';

	let {
		title = 'not available',
		desc = 'not available',
		src = '',
		reverse = false,
		link = '',
		alt = ''
	} = $props();
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
		<h1 class="font-YoungSerif text-5xl [text-shadow:_0px_0px_10px_rgb(255_255_255_/_0.60)]">
			{title}
		</h1>
		<p class="">{desc}</p>
	</div>
</div>
