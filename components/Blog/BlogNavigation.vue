<script setup>
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
			</li>
		</ul>
	</div>
</template>
