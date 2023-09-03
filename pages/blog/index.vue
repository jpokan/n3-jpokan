<template>
	<div class="text-5xl font-limelight text-zinc-600 dark:text-zinc-100 uppercase">Blog</div>
	<BlogContentNavigation :navigation-tree="navigation[0].children" />
	<Footer />
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

</script>