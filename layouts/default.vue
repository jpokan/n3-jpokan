<template>
	<div class="text-zinc-700 jpk-theme dark:text-zinc-200 p-[52px] mx-auto font-satoshi relative h-screen">
		<Logo />
		<NavBar />
		<slot />
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
	return `background-color: ${backgroundColor.value}; color: ${textColor.value}`
})

</script>
