<script lang="ts">
	import { goto } from '$app/navigation';
	import { showTooltip } from '$lib/utils/tooltip.svelte';
	import CardBody from './ThreeDCardEffect/CardBody.svelte';
	import CardContainer from './ThreeDCardEffect/CardContainer.svelte';
	import CardItem from './ThreeDCardEffect/CardItem.svelte';

	let isMouseEntered = $state(false);

	function handleNavigate(event: Event) {
		event.preventDefault();
		event.stopPropagation();
		goto('me');
	}
</script>

<CardContainer bind:isMouseEntered>
	<CardBody
		className="relative flex max-h-[317px] w-[374.34px] items-center justify-center sm:max-h-[520px] sm:w-[614.06px] md:max-h-[640px] md:w-[755.77px] lg:max-h-[795.22px] lg:w-[800px]"
	>
		<CardItem {isMouseEntered} translateZ="70">
			<img
				src="CD_CASE_BACK.webp"
				class="pointer-events-none max-h-[317px] select-none sm:max-h-[520px] md:max-h-[640px] lg:max-h-[800px]"
				alt="cd case back"
			/>
		</CardItem>
		<div
			class="absolute left-[33%] top-[32%] w-[150px] sm:w-[250px] md:w-[300px] lg:top-[16%] lg:w-[624px]"
		>
			<CardItem {isMouseEntered} translateZ="100">
				<div class="h-[181px] w-[375px]">
					<div
						class="origin-top-left rotate-[-3.17deg] font-YoungSerif text-[40px] font-normal text-[#CFD1CF] [text-shadow:_0px_0px_10px_rgb(255_255_255_/_1.00)]"
					>
						<!-- HELP ME -->
					</div>
				</div>
			</CardItem>
		</div>
		<div class="absolute left-[19%] top-[38%] w-[150px] sm:w-[250px] md:w-[300px] lg:w-[624px]">
			<CardItem {isMouseEntered} translateZ="120">
				<div
					class="h-[200px] w-[200px] sm:w-[350px] md:h-[250px] md:w-[400px] lg:h-[281px] lg:w-[450px]"
				>
					<button
						onclick={handleNavigate}
						onmouseenter={() => showTooltip(`Wait.. you want to learn more about me?!!`)}
						onmouseleave={() => showTooltip('Click me to flip me!!')}
						class="w-full origin-top-left rotate-[3.0deg] rounded-lg border-2 hover:[box-shadow:_0px_0px_10px_rgb(255_255_255_/_1.00)]"
					>
						<div
							class=" font-YoungSerif text-[20px] font-normal text-[#CFD1CF] [text-shadow:_0px_0px_10px_rgb(255_255_255_/_1.00)] sm:text-[30px] md:text-[35px] lg:text-[40px]"
						>
							LEARN MORE ABOUT ME
						</div>
					</button>
				</div>
			</CardItem>
		</div>
	</CardBody>
</CardContainer>
