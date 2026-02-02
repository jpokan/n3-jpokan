<template>
	<FancyBox class="grid grid-cols-2 gap-5">
		<a
			class=""
			:href="`${item}`"
			:key="(item, index)"
			v-for="(item, index) in links"
			:data-fancybox="`gallery-${index}`">
			<img
				v-lazy="{ src: `${item}&tr=w-600` }"
				class="object-cover w-full" />
			<slot></slot>
		</a>
	</FancyBox>
</template>

<script setup>
const props = defineProps(["links"]);
</script>
