<template>
	<div class="jpk-theme p-[52px] font-satoshi min-h-screen relative">
		<Logo :path="route.path" class="mr-[52px] sm:pr-[120px]" />
		<NavBar class="z-10 jpk-theme" />
		<div class="pt-[52px] mt-[104px] pb-[104px]">
			<slot />
		</div>
		<Footer class="z-10" />
	</div>
</template>

<script setup>
const route = useRoute()
</script>
