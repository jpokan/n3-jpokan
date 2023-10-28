<template>
	<BlogContentNavigation :navigation-tree="navigation[0].children" />
</template>

<script setup>
definePageMeta({
	layout: "blog",
})

const query = queryContent({
	where: {
		_path: { $contains: '/blog' }
	}
})
const { data: navigation } = await useAsyncData('navigation',
	() => {
		return fetchContentNavigation(query)
	}
)

useHead({
	title: 'Blog'
})
</script>
