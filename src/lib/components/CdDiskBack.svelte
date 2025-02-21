<script lang="ts">
	import CardBody from './ThreeDCardEffect/CardBody.svelte';
	import CardContainer from './ThreeDCardEffect/CardContainer.svelte';
	import CardItem from './ThreeDCardEffect/CardItem.svelte';

	let isMouseEntered = $state(false);
</script>

<CardContainer bind:isMouseEntered>
	<CardBody
		className="relative flex max-h-[317px] w-[374.34px] items-center justify-center sm:max-h-[520px] sm:w-[614.06px] md:max-h-[640px] md:w-[755.77px] lg:max-h-[600px] lg:w-[900px]"
	>
		<CardItem {isMouseEntered} translateZ="70">
			<img
				src="CD_CASE_BACK.png"
				class="pointer-events-none max-h-[317px] select-none sm:max-h-[520px] md:max-h-[640px] lg:max-h-[900px]"
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
		<div
			class="absolute left-[19%] top-[32%] w-[150px] sm:w-[250px] md:w-[300px] lg:top-[36%] lg:w-[624px]"
		>
			<CardItem {isMouseEntered} translateZ="120">
				<div class="h-[281px] w-[450px]">
					<button
						class="w-full origin-top-left rotate-[3.0deg] rounded-lg border-2 hover:[box-shadow:_0px_0px_10px_rgb(255_255_255_/_1.00)]"
					>
						<div
							class=" font-YoungSerif text-[40px] font-normal text-[#CFD1CF] [text-shadow:_0px_0px_10px_rgb(255_255_255_/_1.00)]"
						>
							LEARN MORE ABOUT ME
						</div>
					</button>
				</div>
			</CardItem>
		</div>
	</CardBody>
</CardContainer>
