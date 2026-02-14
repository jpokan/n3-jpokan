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
import { config } from "~/assets/js/fancyboxOptions.js";
defineProps(["links", "project"]);

const colorMode = useColorMode();
const options = ref(config);

onMounted(() => {
	options.value = {
		// attach theme on mount
		theme: colorMode.value,
		...config,
	};
});
</script>
