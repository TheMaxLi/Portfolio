<script lang="ts">
	import CardBody from './ThreeDCardEffect/CardBody.svelte';
	import CardContainer from './ThreeDCardEffect/CardContainer.svelte';
	import CardItem from './ThreeDCardEffect/CardItem.svelte';

	let isMouseEntered = $state(false);
</script>

<CardContainer bind:isMouseEntered>
	<CardBody
		className="relative flex max-h-[317px] items-center justify-center sm:max-h-[520px] md:max-h-[640px] lg:max-h-[795.22px] lg:w-[940px]"
	>
		<CardItem {isMouseEntered} translateZ="70">
			<img
				src="CD_CASE.png"
				class="pointer-events-none max-h-[317px] select-none sm:max-h-[520px] md:max-h-[640px] lg:max-h-[795.22px]"
				alt="cd case"
			/>
		</CardItem>
		<div class="absolute left-[32%] top-[10%] w-full sm:left-[34%] md:left-[35.5%] lg:left-[34%]">
			<CardItem {isMouseEntered} translateZ="100">
				<div
					class="pointer-events-none absolute select-none text-center font-YoungSerif font-normal text-white blur-[4px] sm:text-[150%] md:text-[170%] lg:text-[40px]"
				>
					Max Li<br />Full Stack Developer
				</div>
				<div
					class="absolute text-center font-YoungSerif font-normal text-white drop-shadow-tight sm:text-[150%] md:text-[170%] lg:text-[40px]"
				>
					Max Li<br />Full Stack Developer
				</div>
			</CardItem>
		</div>
		<div
			class="absolute left-[16%] top-[32%] w-[368px] sm:left-[16%] md:left-[16%] lg:left-[149px]"
		>
			<CardItem {isMouseEntered} translateZ="100">
				<div
					class="pointer-events-none absolute w-[368px] select-none font-YoungSerif font-normal text-white blur-[4px] sm:text-[150%] md:text-[180%] lg:text-[40px]"
				>
					<p>&nbsp;&nbsp;&nbsp;[0] Harmony</p>
					<p>&nbsp;[1] Circles</p>
					<p>[2] Mina Bites</p>
					<p>
						&nbsp;[3] Rhythm
						<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;game
					</p>
				</div>
				<div
					class="absolute w-[368px] font-YoungSerif font-normal text-white drop-shadow-tight sm:text-[150%] md:text-[180%] lg:text-[40px]"
				>
					<p>&nbsp;&nbsp;&nbsp;[0] Harmony</p>
					<p>&nbsp;[1] Circles</p>
					<p>[2] Mina Bites</p>
					<p>
						&nbsp;[3] Rhythm
						<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;game
					</p>
				</div>
			</CardItem>
		</div>
	</CardBody>
</CardContainer>
