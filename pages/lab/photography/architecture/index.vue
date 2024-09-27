<template>
	<ContentNavigation v-slot="{ navigation }" :query="query">
		<div class="text-sm font-medium uppercase sm:pr-0">
			<div v-for="item, index in list"
				class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 pb-5">
				<span class="text-zinc-300 dark:text-zinc-700 mr-3 font-bold">{{ item.location }}</span>
				<NuxtLink class="jpk-link" :to="item._path">{{ item.title }}</NuxtLink>
				<a :data-fancybox="`gallery-${index}`" :href="`${i}&tr=w-1920`" v-for="i in item.images">
					<!-- thumbnail -->
					<img :src="`${i}&tr=w-320`" class="object-cover">
				</a>
			</div>
		</div>
	</ContentNavigation>
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const query = await queryContent('lab', 'photography', 'architecture')

useHead({
	title: 'Photography/Architecture'
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(query))
const list = computed(() => {
	return navigation.value[0].children[0].children[0].children
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
