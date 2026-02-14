<template>
	<PhotoGallery :list="posts" />
</template>

<script setup>
const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () => {
	return queryCollection(route.params.slug[0])
		.andWhere((query) => query.where("stem", "NOT LIKE", "%/%/index"))
		.all();
});

useHead({
	title: `Photography/${route.params.slug[0]}`,
});

definePageMeta({
	layout: "photography",
});
</script>
