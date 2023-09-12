<template>
	<div :style="style"
		class="text-zinc-700 dark:text-zinc-200 mx-auto flex justify-center min-h-screen font-satoshi relative">
		<div v-if="$device.isDesktopOrTablet" class="fixed inset-y-[156px] inset-x-[52px]">
			<slot />
		</div>
		<div v-else class="py-14">
			<slot />
		</div>
		<Logo />
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
	return `background-color: ${backgroundColor.value}; color: ${textColor.value}`
})

</script>
