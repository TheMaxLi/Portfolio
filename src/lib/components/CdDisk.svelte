<script lang="ts">
	import ProjectLink from './ProjectLink.svelte';
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
			<CardItem {isMouseEntered} translateZ="120">
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
			class="absolute left-[16%] top-[32%] w-[150px] sm:left-[16%] sm:w-[250px] md:left-[16%] md:w-[300px] lg:left-[149px] lg:w-[368px]"
		>
			<CardItem {isMouseEntered} translateZ="120">
				<div
					class="pointer-events-none absolute w-fit select-none font-YoungSerif font-normal text-white blur-[4px] sm:text-[150%] md:text-[180%] lg:text-[40px]"
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
					class="absolute font-YoungSerif font-normal text-white drop-shadow-tight sm:text-[150%] md:text-[180%] lg:text-[40px]"
				>
					<ProjectLink className="pr-5" title="&nbsp;&nbsp;&nbsp;[0] Harmony </br>" />
					<ProjectLink className="pr-3" title="&nbsp;[1] Circles </br>" />
					<ProjectLink className="px-1" title="[2] Mina Bites </br>" />
					<ProjectLink
						className="pr-2 sm:pr-5"
						title="&nbsp;[3] Rhythm </br>
						 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;game"
					/>
				</div>
			</CardItem>
		</div>
	</CardBody>
</CardContainer>
