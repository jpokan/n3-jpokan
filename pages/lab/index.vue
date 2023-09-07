<template>
	<div class="grid gap-5 grid-cols-4 font-bold font-satoshi">
		<div class="border-b-2 border-solid border-zinc-700 dark:border-zinc-200" v-for="item in links" key="item">{{ item
		}}</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "lab",
})
const links = ['SHADERS', 'THREEJS', '', '']
</script>