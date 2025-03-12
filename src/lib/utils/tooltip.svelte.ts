export const tooltipState = $state({
	isVisible: false,
	text: '',
	position: { x: 0, y: 0 }
});

export function showTooltip(text: string) {
	tooltipState.isVisible = true;
	tooltipState.text = text;
}

export function hideTooltip() {
	tooltipState.isVisible = false;
}
