<template>
	<div class="font-jost font-bold text-5xl flex flex-wrap h-[52px]">
		<NuxtLink class="mr-5" to="/">JPOKAN</NuxtLink>
		<NuxtLink v-if="path" :to="compounded[index]" v-for="item, index in nested" class="truncate text-zinc-200 dark:text-zinc-800 uppercase hover:text-zinc-700 dark:hover:text-zinc-200">
			<span
				class="">
				/{{ item }}
			</span>
		</NuxtLink>
	</div>
</template>

<script setup>
const props = defineProps(['path'])

const nested = computed(() => {
	const s = props.path.split('/').filter((e) => e !== '')
	return s
})

const compounded = computed(() => {
	const arr = []
	let temp = ''
	for (let i = 0; i < nested.value.length; i++) {
		temp = temp + '/' + nested.value[i]
		arr.push(temp)
	}
	return arr
})

</script>
