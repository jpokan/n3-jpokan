<template>
	<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-satoshi">
		<ContentNavigation v-slot="{navigation}" :query="query">
		<div v-for="item in navigation[0].children" key="item">
			<div class="border-b-2 border-solid border-zinc-700 dark:border-zinc-200 font-semibold text-sm mb-5 uppercase">
				{{ item.title }}
			</div>
			<ul>
				<li v-for="i in item.children">
					<NuxtLink class="jpk-link" v-if="i.i_url" :to="i.i_url">{{ i.title }}</NuxtLink>
					<a class="jpk-link" v-if="i.url" :href="i.url" target="_blank">{{ i.title }}</a>
				</li>
			</ul>
		</div>
		</ContentNavigation>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "lab",
})

useHead({
	title: 'Lab'
})

const query = queryContent('lab')
</script>

