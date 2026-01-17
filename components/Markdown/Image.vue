<template>
	<div class="">
		<img :src="props.src" alt="" />
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps(["src"]);
</script>
