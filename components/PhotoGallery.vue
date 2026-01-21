<template>
	<div class="text-sm font-medium uppercase sm:pr-0 grid gap-3 lg:gap-5">
		<div
			v-for="(item, index) in list"
			:key="index"
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-5">
			<span class="text-zinc-300 dark:text-zinc-700 mr-3 font-bold">
				{{ item.navigation.location }}
			</span>
			<div class="jpk-link">{{ item.title }}</div>
			<a
				:data-fancybox="`gallery-${index}`"
				:href="`${i}&tr=w-1920`"
				v-for="i in item.navigation.images">
				<!-- thumbnail x2 150px - 300px -->
				<div class="aspect-[4/6] w-full">
					<img
						v-lazy="{ src: `${i}&tr=w-300` }"
						class="object-cover w-full" />
				</div>
			</a>
		</div>
	</div>
</template>

<script setup>
defineProps(["list"]);
</script>
