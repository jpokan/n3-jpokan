<template>
	<div class="text-zinc-700  dark:text-zinc-200 font-satoshi ">
		<slot />
		<Logo :style="style" class="fixed top-[52px] left-[52px]" />
		<NavBar :style="style" />
	</div>
</template>

<script setup>
const styles = [
	{ title: 'Daniel Chung', backgroundColor: '#F5EFDF', textColorLight: '#E3DCCA', textColorDark: '#4C4943' }
]

const textColor = useState('text-color')
const backgroundColor = useState('background-color')

textColor.value = styles[0].textColorDark
backgroundColor.value = styles[0].backgroundColor

const style = computed(() => {
	return `color: ${textColor.value}`
})

</script>
