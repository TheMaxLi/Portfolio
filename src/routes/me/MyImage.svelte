<script>
	import CardBody from '$lib/components/ThreeDCardEffect/CardBody.svelte';

	import CardContainer from '$lib/components/ThreeDCardEffect/CardContainer.svelte';
	import CardItem from '$lib/components/ThreeDCardEffect/CardItem.svelte';
	import { hideTooltip, showTooltip } from '$lib/utils/tooltip.svelte';

	let isMouseEntered = $state();
</script>

<CardContainer bind:isMouseEntered containerClassName="py-0">
	<CardBody className="relative flex items-center justify-center">
		<CardItem {isMouseEntered} className="flex justify-center" translateZ="30">
			<img
				onmouseenter={() => showTooltip(`Photo taken by joe__salmon <3`)}
				onmouseleave={() => hideTooltip()}
				src="/me2.webp"
				alt="Me"
				class="w-5/6 rounded-sm border border-gray-100 bg-white p-4 shadow-md"
			/>
		</CardItem>
	</CardBody>
</CardContainer>
