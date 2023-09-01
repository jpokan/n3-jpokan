<template>
	<BlogContentNavigation :navigation-tree="navigation" />
	<Footer />
</template>

<script setup>
definePageMeta({
	layout: "blog",
})

const { data: navigation } = await useAsyncData('navigation', () => {
	return fetchContentNavigation()
})
</script>