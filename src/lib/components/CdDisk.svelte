<script lang="ts">
	import ProjectLink from './Project/ProjectLink.svelte';
	import CardBody from './ThreeDCardEffect/CardBody.svelte';
	import CardContainer from './ThreeDCardEffect/CardContainer.svelte';
	import CardItem from './ThreeDCardEffect/CardItem.svelte';

	let isMouseEntered = $state(false);
</script>

<CardContainer bind:isMouseEntered>
	<CardBody
		className="relative flex max-h-[317px] w-[374.34px] items-center justify-center sm:max-h-[520px] sm:w-[614.06px] md:max-h-[640px] md:w-[755.77px] lg:max-h-[795.22px] lg:w-[800px]"
	>
		<CardItem {isMouseEntered} translateZ="70">
			<img
				src="CD_CASE.webp"
				class="pointer-events-none max-h-[317px] select-none sm:max-h-[520px] md:max-h-[640px] lg:max-h-[800px]"
				alt="cd case"
			/>
		</CardItem>
		<div class="absolute left-[32%] top-[8%] w-full sm:left-[34%] md:left-[35.5%] lg:left-[33%]">
			<CardItem {isMouseEntered} translateZ="120">
				<div
					class="absolute text-center font-YoungSerif font-normal text-[#CFD1CF] drop-shadow-tight [text-shadow:_0px_0px_10px_rgb(255_255_255_/_1.00)] sm:text-[150%] md:text-[170%] lg:text-[34px]"
				>
					Shuyu Li<br />Full Stack Developer
				</div>
			</CardItem>
		</div>
		<div
			class="absolute left-[16%] top-[32%] w-[150px] sm:w-[250px] md:w-[300px] lg:top-[30%] lg:w-[348px]"
		>
			<CardItem {isMouseEntered} translateZ="120">
				<div class="absolute drop-shadow-tight sm:text-[150%] md:text-[180%] lg:text-[34px]">
					<ProjectLink
						className="pr-5"
						title="&nbsp;&nbsp;&nbsp;&nbsp;[O] Harmony </br>"
						href="#Harmony"
						name="Harmony"
					/>
					<ProjectLink
						className="pr-3"
						title="&nbsp;&nbsp;[1] Circles </br>"
						href="#Circles"
						name="Circle"
					/>

					<ProjectLink
						className="px-1"
						title="[2] Mina Bites </br>"
						href="#MinaBites"
						name="Mina Bites"
					/>
					<ProjectLink
						href="#GreenBasil"
						className="pr-2 sm:pr-3"
						title="&nbsp;&nbsp;[3] Green Basil"
						name="Green Basil"
					/>
					<!-- <ProjectLink
						href="#RhythmShu"
						className="pr-2 sm:pr-3"
						title="&nbsp;&nbsp;&nbsp;&nbsp;[4] Rhythm</br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shu"
						name="Rhythm Shu"
					/> -->
				</div>
			</CardItem>
		</div>
	</CardBody>
</CardContainer>
