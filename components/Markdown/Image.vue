<template>
	<a href="" class="">
		<img
			data-fancybox="markdown-gallery"
			class="aspect-[3/2] object-cover object-center"
			:src="`${props.src}`"
			alt="" />
		<slot></slot>
	</a>
</template>

<script setup>
const props = defineProps(["src"]);
</script>
