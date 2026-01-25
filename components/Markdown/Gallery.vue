<template>
	<div class="grid grid-cols-2 gap-5">
		<MarkdownImage v-for="item in links" :key="item" :src="item" />
	</div>
</template>

<script setup>
const props = defineProps(["links"]);
</script>
