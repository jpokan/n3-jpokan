<template>
	<div class="text-xs text-center">
		<ul v-show="show" class="mb-2">
			<li v-for="item, index in sites" :class="{ enter: show }" :style="`--anim: ${index + 1};`">
			<a :href="item.link" target="_blank" :key="item.link">[ {{ item.year }} ]</a>
		</li>
		</ul>
		<button @click="show = !show" title="Previous versions" class="px-2">
			<svg class="h-4 w-4 mx-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3a9 9 0 0 0-9 9H1l4 3.99L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z"/></svg>
		</button>
	</div>
</template>

<script setup>
	const show = ref(false)
	const sites = ref([
	{
		year: '2020',
		link: 'https://jpokan.netlify.app'
	},
	{
		year: '2021',
		link: 'https://n-jpokan.netlify.app'
	}
	])
</script>

<style>
.enter {
	opacity: 0;
	animation: enter 1s forwards;
	animation-delay: calc(var(--anim) * 100ms);
}

@keyframes enter {
	0% {
		transform: perspective(50px) rotateX(-60deg) translateY(5px);
		opacity: 0;
	}

	100% {
		transform: perspective(100px) rotateX(0deg) translateY(0px);
		opacity: 100;
	}
}

</style>
