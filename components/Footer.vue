<template>
	<div class="flex flex-col text-right text-xs font-semibold font-satoshi bg-zinc-100 dark:bg-zinc-900">
		<div class="border-b-2 border-solid border-zinc-700 dark:border-zinc-200" v-for="item in links" key="item">
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script setup>
const links = ['EMAIL', 'TWITTER', 'GITHUB']
</script>
