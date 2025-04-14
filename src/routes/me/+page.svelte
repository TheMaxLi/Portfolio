<script lang="ts">
	import { goto } from '$app/navigation';
	import handleAnchorClick from '$lib/utils/handleAnchorClick';
	import { hideTooltip, showTooltip } from '$lib/utils/tooltip.svelte';
	import Inspiration from './Inspiration.svelte';
	import MyImage from './MyImage.svelte';

	function exitAboutMe() {
		goto('/');
	}
</script>

<div class="fixed flex w-screen items-center justify-between p-2">
	<div></div>

	<button
		onclick={exitAboutMe}
		class="rounded-full p-1 text-zinc-400 hover:bg-zinc-700 hover:text-white"
		aria-label="Exit
		button"
	>
		<svg class="h-4 w-4" viewBox="0 0 24 24">
			<path
				d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
				fill="currentColor"
			></path>
		</svg>
	</button>
</div>
<main class="min-h-screen p-6 md:p-10">
	<div class="mx-auto max-w-4xl pt-4">
		<div class="mb-12 flex rotate-3 transform justify-center">
			<MyImage />
		</div>

		<div class="space-y-6 pb-12 max-sm:pb-0">
			<h1 class="font-serif text-5xl leading-tight text-[#CFD1CF] max-sm:text-4xl">
				<span class="italic">I'm</span> passionate about pushing the boundaries of technology and
				creativity to create <span class="font-light italic">unique</span> solutions.
			</h1>

			<div class="space-y-4 text-lg text-[#CFD1CF] max-sm:text-base">
				<p>
					I’m Max Shuyu Li, a full-stack developer passionate about the raw, innovative sounds of
					the underground Chinese music scene. I bring the same curiosity and excitement when
					exploring new tools and frameworks in the tech world. I'm constantly looking for
					innovations that I can contribute to, always striving to create something fresh and unique
				</p>

				<p>
					When I’m not coding, you’ll find me exploring underground music venues and discovering new
					artists, it is the
					<button
						class="text-orange-400 underline"
						onclick={(e) => handleAnchorClick(e, '#inspiration')}
					>
						inspiration
					</button>
					for my creativity and energy of these scenes.
				</p>
			</div>
		</div>
		<div class="flex flex-col text-[#CFD1CF]">
			<span>Contact me at:</span>
			<a
				class="text-orange-400 underline"
				href="https://www.linkedin.com/in/max-shuyu-li-7066832b3/">LinkedIn</a
			>
			<a class="text-orange-400 underline" href="https://github.com/TheMaxLi">Github</a>
		</div>
		<Inspiration />
	</div>
</main>
