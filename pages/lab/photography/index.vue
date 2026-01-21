<template>
	<div class="text-sm font-medium uppercase pr-[104px] sm:pr-0">
		<ul>
			<li v-for="item in data[0].children[3].children" class="pb-5">
				<NuxtLink class="jpk-link" :to="item.path">
					{{ item.title }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
const { data } = await useAsyncData("lab-photography-navigation", () => {
	return queryCollectionNavigation("lab", ["meta"]);
});

useHead({
	title: "Photography",
});

definePageMeta({
	layout: "photography",
});
</script>
