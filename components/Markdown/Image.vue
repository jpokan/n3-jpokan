<template>
	<div class="">
		<img
			class="aspect-[3/2] object-cover object-center"
			:src="props.src"
			alt="" />
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps(["src"]);
</script>
