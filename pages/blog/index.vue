<template>
	<ContentNavigation v-slot="{ navigation }" :query="query">
		<div class="text-sm font-medium uppercase pr-[104px] sm:pr-0">
			<ul>
				<li v-for="item in navigation[0].children" class="pb-5">
					<NuxtLink class="jpk-link" :to="item._path">{{ item.title }}</NuxtLink>
				</li>
			</ul>
		</div>
	</ContentNavigation>
</template>

<script setup>
definePageMeta({
	layout: "blog",
})

const query = queryContent('blog')

useHead({
	title: 'Blog'
})
</script>
