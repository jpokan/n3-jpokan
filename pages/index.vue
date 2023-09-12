<template>
	<div class="grid grid-cols-6 gap-x-[15px] h-full place-content-center w-full">
		<ImgScreen />
		<NavThumbnail />
		<Bottom />
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
</script>