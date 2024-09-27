<template>
	<ContentNavigation v-slot="{ navigation }" :query="query">
		<div class="text-sm font-medium uppercase pr-[104px] sm:pr-0">
			<ul>
				<li v-for="item in navigation[0].children[0].children" class="pb-5">
					<span class="text-zinc-300 dark:text-zinc-700 mr-3 font-bold">{{ item.locale }}</span>
					<NuxtLink class="jpk-link" :to="item._path">{{ item.title }}</NuxtLink>
				</li>
			</ul>
		</div>
	</ContentNavigation>
</template>

<script setup>
const query = queryContent('lab', 'photography')

useHead({
	title: 'Photography'
})

definePageMeta({
	layout: "photography",
})
</script>
