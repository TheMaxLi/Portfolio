export default function handleAnchorClick(event: Event, href: string) {
	event.preventDefault();
	event.stopPropagation();
	const anchor = document.querySelector(href) as HTMLElement;
	if (!anchor) {
		console.log('no anchors found');
	}
	window.scrollTo({
		top: anchor?.offsetTop,
		behavior: 'smooth'
	});
}
