<script lang="ts">
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
				src="CD_CASE_BACK.png"
				class="pointer-events-none max-h-[317px] select-none sm:max-h-[520px] md:max-h-[640px] lg:max-h-[795.22px]"
				alt="cd case back"
			/>
		</CardItem>
	</CardBody>
</CardContainer>
