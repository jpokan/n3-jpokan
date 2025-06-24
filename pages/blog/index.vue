<template>
	<div class="text-sm font-medium uppercase pr-[104px] sm:pr-0">
		<ul>
			<li v-for="item in data[0].children" class="pb-5">
				<span class="text-zinc-300 dark:text-zinc-700 mr-3 font-bold">{{
					item.meta.locale
				}}</span>
				<NuxtLink class="jpk-link" :to="item.path">{{
					item.title
				}}</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "blog",
});

const { data } = await useAsyncData("blog-navigation", () => {
	return queryCollectionNavigation("blog", ["meta"]);
});

// const { data: posts } = await useAsyncData("blog", () =>
// 	queryCollection("blog").all()
// );

useHead({
	title: "Blog",
});
</script>
