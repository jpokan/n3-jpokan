<template>
	<PhotoGallery :list="posts" />
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () => {
	return queryCollection(route.params.slug[0]).all();
});

onMounted(() => {
	const list = posts.value.filter((i) => i.path !== route.path);

	for (let i = 0; i < list.length; i++) {
		Fancybox.bind(`[data-fancybox="gallery-${i}"]`, {
			// Your custom options
		});

		// get #gallery-0 (9th item on hash) compare with index
		// if (Number(route.hash[9]) === i) {
		// 	Fancybox.show(`[data-fancybox="gallery-${i}"]`, {
		// 		// Your custom options
		// 	});
		// }
	}
});

useHead({
	title: `Photography/${route.params.slug[0]}`,
});

definePageMeta({
	layout: "photography",
});
</script>
