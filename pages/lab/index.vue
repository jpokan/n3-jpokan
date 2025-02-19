<template>
	<div class="sm:flex grid gap-5 relative">
		<div class="sm:w-1/5">
		<ContentNavigation v-slot="{navigation}" :query="query">
		<div v-for="item in navigation[0].children" key="item">
			<div class="border-b border-solid border-zinc-800 dark:border-zinc-200 font-semibold text-sm mb-5 uppercase">
				{{ item.title }}
			</div>
			<ul class="mb-5">
				<li v-for="i in item.children">
					<!-- internal link -->
					<NuxtLink class="jpk-link" v-if="i.i_url" :to="i.i_url">{{ i.title }}</NuxtLink>
					<!-- external link -->
					<!-- <a class="jpk-link relative" v-if="i.url" :href="i.url" target="_blank">{{ i.title }}<span class="text-xs absolute -right-4 top-0.5">↗</span></a> -->
					<button @click="setURL(i.url)" class="jpk-link" v-if="i.url">{{ i.title }}</button>
				</li>
			</ul>
		</div>
		</ContentNavigation>
		</div>
		<div class="sm:w-4/5 sticky top-0 h-screen py-5">
			<div class="border-zinc-800 border h-full">
				<iframe :src="currentSite" frameborder="0" class="h-full w-full"></iframe>
			</div>
		</div>
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
const currentSite = ref('')

function setURL(arg){
	currentSite.value = arg
}
</script>

