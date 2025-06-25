<template>
	<PhotoGallery :list="posts" />
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () => {
	return queryCollection(route.params.slug[0]).all();
});

// const { data } = await useAsyncData("photography-navigation", () => {
// 	return queryCollectionNavigation("photo").andWhere((query) =>
// 		query.where("path", "IN", "lab").where("path", "<>", route.path)
// 	);
// });

// console.log(data);

useHead({
	title: `Photography/${route.params.slug[0]}`,
});

onMounted(() => {
	const list = posts.value.filter((i) => i.path !== route.path);

	for (let i = 0; i < list.length; i++) {
		Fancybox.bind(`[data-fancybox="gallery-${i}"]`, {
			// Your custom options
		});
	}
});

definePageMeta({
	layout: "photography",
});
</script>
