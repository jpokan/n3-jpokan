<template>
	<div></div>
</template>

<script setup>
import Experience from 'assets/experience.js'

if (process.client) {
	useHead({
		script: [
			{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
				onload: (e) => trigger(e)
			},
			{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/CustomEase.min.js',
				onload: (e) => trigger(e)
			}
		]
	})
}

let libs = []

function trigger(e) {
	libs.push(e.timeStamp)
	// Create Webgl experience after the scripts are loaded
	if (libs.length === 2) {
		new Experience()
	}
}

</script>
