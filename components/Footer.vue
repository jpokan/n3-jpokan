<template>
	<div class="flex flex-col text-right text-xs font-semibold font-satoshi bg-zinc-100 dark:bg-zinc-900 h-[52px]">
		<div v-for="item in links" key="item">
			<NuxtLink class="jpk-link" :to="item.link">{{
				item.text }}</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const links = [
	{ link: 'mailto:jol_ou@hotmail.com', text: 'EMAIL' },
	{ link: 'https://twitter.com/jpokan', text: 'TWITTER' },
	{ link: 'https://github.com/jpokan', text: 'GITHUB' },
]
</script>

<style lang="postcss">
.bo {
	@apply border-b-2 border-solid border-zinc-700 dark:border-zinc-200;
}
</style>