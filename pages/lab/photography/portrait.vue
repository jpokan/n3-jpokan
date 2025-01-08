<template>
	<PhotoGallery :query="query" :list="list" />
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const query = await queryContent('lab', 'photography', 'portrait')

useHead({
	title: 'Photography/Portrait'
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(query))
const list = computed(() => {
	const posts = navigation.value[0].children[0].children[0].children
	return posts.filter((i)=>i._path!=="/lab/photography/portrait")
})

onMounted(() => {
	for (let i = 0; i < list.value.length; i++) {
		Fancybox.bind(`[data-fancybox="gallery-${i}"]`, {
			// Your custom options
		});
	}
})


definePageMeta({
	layout: "photography",
})

</script>


