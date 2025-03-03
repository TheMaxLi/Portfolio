<script lang="ts">
	function handleAnchorClick(event: Event, href: string) {
		event.preventDefault();
		event.stopPropagation();
		const scrollableContainer = document.querySelector('#content');
		const anchor = document.querySelector(href) as HTMLElement;

		scrollableContainer?.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<div class="relative flex w-full py-[100px]">
	<div class="flex w-full flex-col text-white">
		<!-- <button onclick={(e) => handleAnchorClick(e, '#a1')}>#a1</button>
		<button onclick={(e) => handleAnchorClick(e, '#a2')}>#a2</button>
		<button onclick={(e) => handleAnchorClick(e, '#a3')}>#a3</button>
		<button onclick={(e) => handleAnchorClick(e, '#a4')}>#a4</button> -->
		<div class="flex h-full w-full items-center justify-center">
			<img class="max-h-[500px]" alt="CD" src="/src/lib/images/CD.png" />
		</div>
	</div>
	<div class="flex max-h-screen w-full flex-col overflow-y-scroll text-white" id="content">
		<h1 class="pb-2 text-5xl">Harmony</h1>
		<div class="flex pb-20 text-sm">
			<p>Role: Developer</p>
			<p>Typescript, Solid.js, SQLite</p>
		</div>
		<p>
			ajsdlkasjdpawjklcmma,ncalksdjqowdk;lskaldmamcnansjakldsj;dkasj dkajsdlkasjdiasjdkasj
			kldajslkdjaslk djaskljdlkasjdlk;asjd lkasjdl kajsdj asklj klasjd lkasjdl jaslkdjalsjd asiidj
			laskj lkaj lkdasj klasjdkl ajsk dakl jalkd jaslkd jalskjd lakj dajdkasj la j dlkaj dlkasj
			daklsjdoi wqu dpjqwj kldjaslkd ajd qw j ddj';zl jzx,.nc ajpdoqwipdosajd nas ddjqwp jlkqd ldkqj
			lk jaspjd ask
		</p>
	</div>
</div>
