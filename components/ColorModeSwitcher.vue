<template>
	<button @click="toggleTheme()">
		<div v-show="colorMode.unknown" class="animate-pulse rounded-full bg-zinc-600 dark:bg-zinc-400 h-2 w-2 mx-auto">
		</div>
		<IconsSun v-show="colorMode.value === 'light'" />
		<IconsMoon v-show="colorMode.value === 'dark'" />
	</button>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const toggleTheme = () => {
	if (colorMode.value === 'light') {
		colorMode.preference = 'dark'
	} else {
		colorMode.preference = 'light'
	}
}
</script>
