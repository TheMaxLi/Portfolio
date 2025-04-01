<script>
	import { goto } from '$app/navigation';

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
	<div class="mx-auto max-w-2xl">
		<div class=" mb-12 flex rotate-3 transform justify-center">
			<img
				src="/me.webp"
				alt="Me"
				class="h-auto w-3/4 rounded-sm border border-gray-100 bg-white p-4 shadow-md"
			/>
		</div>

		<div class="space-y-6">
			<h1 class="font-serif text-4xl leading-tight text-[#CFD1CF]">
				<span class="italic">I'm</span> passionate about pushing the boundaries of technology and
				creativity to create <span class="font-light italic">unique</span> solutions.
			</h1>

			<div class="space-y-4 text-[#CFD1CF]">
				<p>
					I’m Max Shuyu Li, a full-stack developer passionate about the raw, innovative sounds of
					the underground Chinese music scene, I bring the same curiosity and excitement when
					exploring new tools and frameworks in the tech world. I’m constantly on the lookout for
					new innovations that I can contribute to, always striving to create something fresh and
					unique.
				</p>

				<p>
					When I’m not coding, you’ll find me exploring underground music venues, discovering new
					artists, it is the
					<a href="#inspiration" class="text-orange-400 underline"> inspiration </a>
					for my creativity and energy of these scenes.
				</p>
			</div>
		</div>
	</div>
</main>
