<template>
	<article
		v-if="page"
		class="prose prose-zinc dark:prose-invert prose-a:no-underline prose-a:font-black prose-headings:uppercase prose-headings:font-semibold prose-h1:font-bold"
	>
		<h1 class="font-jost font-black uppercase text-5xl">
			{{ page.title }}
		</h1>
		<ContentRenderer :prose="true" :value="page" />
	</article>
</template>

<script setup>
import "~/assets/css/prism-forest-light.css";

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection("blog").path(route.path).first();
});

definePageMeta({
	layout: "blog",
});
</script>
