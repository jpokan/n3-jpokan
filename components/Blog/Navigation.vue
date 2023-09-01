<script setup>
// defineProps({
// 	navigationTree: {
// 		type: Array,
// 		default: () => []
// 	}
// })

const { data: navigation } = await useAsyncData('navigation', () => {
	return fetchContentNavigation()
})
</script>

<template>
	<div class="grid grid-flow-row grid-cols-2 py-5">
		<ul>
			<li v-for="(item, index) in navigation" :key="index">
				<NuxtLink :to="item._path">
					{{ item.title }}
				</NuxtLink>
				<!-- <AppNavigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" /> -->
			</li>
		</ul>
		<!-- <div class="text-left">
			<nuxt-link class="" v-if="navigation.prev" :to="`/${navigation.prev}`">
				<IconsLeft class="w-5 h-5 fill-current inline" />previous
			</nuxt-link>
		</div>
		<div class="text-right">
			<nuxt-link class="" v-if="navigation.next" :to="`/${navigation.next}`">next
				<IconsRight class="w-5 h-5 fill-current inline" />
			</nuxt-link>
		</div> -->
	</div>
</template>