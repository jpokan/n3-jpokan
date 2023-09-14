<template>
	<div></div>
	<!-- <canvas id="webgl" class="fixed inset-0"></canvas> -->
	<!-- <div class="border h-full grid grid-cols-1 gap-[15px] overflow-hidden overflow-y-scroll max-w-xl mx-auto">
			<div v-for="(item, index) in data" :key="index" class="bg-gray-400 w-full h-[156px]">
				<img :src="buildPath(item.slug, 1)" alt="" class="object-center object-cover">
			</div>
		</div> -->
</template>

<script setup>
import Experience from 'assets/experience.js'

useHead({
	script: [
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/CustomEase.min.js'
		}
	]
})

const { data } = await useAsyncData('projects',
	() => queryContent('/projects').find()
)

function buildPath(slug, number) {
	return `/img/${slug}/${number}.png`
}

onMounted(() => {
	new Experience()
})

</script>