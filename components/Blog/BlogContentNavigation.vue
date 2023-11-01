<script setup>
defineProps({
	navigationTree: {
		type: Array,
		default: () => [],
	},
});
</script>

<template>
	<div class="text-sm font-medium uppercase pr-[104px] sm:pr-0">
	<ul>
		<li v-for="(item, index) in navigationTree" :key="index" class="pb-5">
			<NuxtLink v-if="item.published" :to="item._path" class="jpk-link">
				{{ item.title }}
			</NuxtLink>
		</li>
	</ul>
	</div>
</template>
