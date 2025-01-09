<template>
	<ContentNavigation v-slot="{ navigation }" :query="query">
		<div class="text-sm font-medium uppercase sm:pr-0">
			<div v-for="item, index in list" :key="index"
				class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 pb-5">
				<span class="text-zinc-300 dark:text-zinc-700 mr-3 font-bold">{{ item.location }}</span>
				<div class="jpk-link">{{ item.title }}</div>
				<a :data-fancybox="`gallery-${index}`" :href="`${i}&tr=w-1920`" v-for="i in item.images">
					<!-- thumbnail -->
					<img :src="`${i}&tr=w-320`" class="object-cover">
				</a>
			</div>
		</div>
	</ContentNavigation>
</template>

<script setup>
defineProps(['query', 'list'])
</script>
