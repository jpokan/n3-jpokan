<template>
	<PhotoGallery :query="query" :list="list" />
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const route = useRoute()

useHead({
	title: 'Photography/Architecture'
})

const query = queryContent(route.path)
const navigation = await fetchContentNavigation(query)

const posts = navigation[0].children[0].children[0].children
const list = posts.filter((i) => i._path !== route.path)

onMounted(() => {
	for (let i = 0; i < list.length; i++) {
		Fancybox.bind(`[data-fancybox="gallery-${i}"]`, {
			// Your custom options
		});
	}
})


definePageMeta({
	layout: "photography",
})

</script>
