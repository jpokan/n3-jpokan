<template>
	<div class="sm:flex grid gap-5 relative">
		<div class="sm:w-1/5">
			<ContentNavigation v-slot="{ navigation }" :query="query">
				<div v-for="item in navigation[0].children" key="item">
					<div
						class="border-b border-solid border-zinc-800 dark:border-zinc-200 font-semibold text-sm mb-5 uppercase">
						{{ item.title }}
					</div>
					<ul class="mb-5">
						<li v-for="i in item.children">
							<!-- internal link -->
							<NuxtLink class="jpk-sublink" v-if="i.i_url" :to="i.i_url">{{ i.title }}</NuxtLink>
							<!-- external link -->
							<!-- <a class="jpk-link relative" v-if="i.url" :href="i.url" target="_blank">{{ i.title }}<span class="text-xs absolute -right-4 top-0.5">↗</span></a> -->
							<button @click="setURL(i.url)" :class="{ active: isActive(i.url) }" class="jpk-sublink" v-if="i.url">{{ i.title }}</button>
						</li>
					</ul>
				</div>
			</ContentNavigation>
		</div>
		<div class="sm:w-4/5 bottom-0 sticky sm:top-0 sm:h-screen h-96 py-5">
			<div class="dark:border-zinc-200 border-zinc-800 border h-full w-full relative">
				<div class="absolute inset-0 text-center -z-10">
					<div class="h-full grid items-center">
						<IconsLoader v-if="loading" class="w-12 mx-auto"/>
						<span v-if="!currentSite" class="hidden sm:block">
							Click links on the left to display preview
						</span>
						<span  v-if="!currentSite" class="sm:hidden">
							Click links to display preview
						</span>
					</div>
				</div>
				<iframe v-show="!loading" :src="currentSite" @load="loaded" frameborder="0" class="h-full w-full bg-zinc-100 dark:bg-zinc-900"></iframe>
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
const loading = ref(false)

function loaded() {
	loading.value = false
	console.log('loaded');
}
const isActive = (arg)=>{
	return currentSite.value === arg 
}
function setURL(arg) {
	loading.value = true
	currentSite.value = arg
}

</script>
