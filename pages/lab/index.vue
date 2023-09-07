<template>
	<div class="grid gap-4 grid-cols-4 text-xs font-bold font-satoshi">
		<div class="border-b-2 border-solid" v-for="item in links" key="item">{{ item }}</div>
	</div>
</template>

<script setup>
const links = ['EMAIL', 'INSTAGRAM', 'TWITTER', 'GITHUB']
</script>