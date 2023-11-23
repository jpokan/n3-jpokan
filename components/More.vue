<template>
	<div @click="show" class="text-xs w-5 inline-block text-center">+</div>
	<div>
		<a href="">v. 2020</a>
	</div>
</template>

<script setup>
const popup = ref(false)
const show = () => console.log('showing')
</script>
