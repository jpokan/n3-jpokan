<template>
	<div class="grid gap-4 grid-cols-4 text-xs font-bold font-satoshi">
		<div class="border-b-2 border-solid border-zinc-700 dark:border-zinc-200" v-for="item in links" key="item">
			{{ item }}
		</div>
		© 2023 - JPOKAN
	</div>
</template>

<script setup>
const links = ['EMAIL', 'INSTAGRAM', 'TWITTER', 'GITHUB']
</script>
