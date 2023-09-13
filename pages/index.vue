<template>
	<div class="py-[52px] h-full border border-dotted">
		<div class="border h-full grid grid-cols-1 gap-[15px] overflow-hidden overflow-y-scroll max-w-xl mx-auto">
			<div v-for="(item, index) in data" :key="index" class="bg-gray-400 w-full h-[156px]">
				<img :src="buildPath(item.slug, 1)" alt="" class="object-center object-cover">
			</div>
		</div>
	</div>
</template>

<script setup>
useHead({
	script: [
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
		}
	]
})

const { data } = await useAsyncData('projects',
	() => queryContent('/projects').find()
)

function buildPath(slug, number) {
	return `/img/${slug}/${number}.png`
}
</script>