<template>
	<FancyBox :fancybox-options="options" class="grid grid-cols-2 gap-5">
		<a
			v-for="item in links"
			:href="item"
			:data-fancybox="`gallery-${project ? project : 'main'}`">
			<img
				v-lazy="{ src: `${item}&tr=w-600` }"
				class="object-cover w-full" />
			<slot></slot>
		</a>
	</FancyBox>
</template>

<script setup>
const props = defineProps(["links", "project"]);
const colorMode = useColorMode();

const options = {
	theme: colorMode.value,
};
</script>
