<template>
	<FancyBox class="grid grid-cols-2 sm:grid-cols-3 gap-5">
		<MarkdownImage v-for="item in links" :key="item" :src="item" />
	</FancyBox>
</template>

<script setup>
const props = defineProps(["links"]);
</script>
