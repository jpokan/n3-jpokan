<template>
	<footer class="flex flex-col text-right text-xs font-semibold font-satoshi h-[52px]">
		<div v-for="item in links" key="item">
			<NuxtLink class="jpk-link" :to="item.link">
				{{ item.text }}
			</NuxtLink>
		</div>
	</footer>
</template>

<script setup>
const links = [
	{ link: 'mailto:contact@jpokan.com', text: 'EMAIL' },
	{ link: 'https://twitter.com/jpokan', text: 'TWITTER' },
	{ link: 'https://github.com/jpokan', text: 'GITHUB' },
]
</script>

