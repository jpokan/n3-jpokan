<template>
<div class="max-w-[502px] mx-auto pr-[104px] sm:pr-0 jpk-theme">
	<p class="text-6xl pb-2 font-medium">Hello!</p>
	<p class="text-6xl pb-5 font-medium">I'm Jorge,</p>
	<p class="text-2xl">and I build 3D websites and tools for architects.</p>
	<div class="py-10 text-center font-bold relative">
		<button @click="show" class="jpk-link bg-zinc-200 dark:bg-zinc-800 w-10 h-10 rounded-full transition-none">
			<span v-if="longbio">-</span>
			<span v-else>+</span>
		<ReadMore class="absolute inset-0 mx-auto my-5 text-4xl font-normal w-20 h-20 -rotate-[40deg] tracking-wider hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-full" />
		</button>
	</div>
	<div class="pb-5 h-full" v-show="longbio">
		<p class="pb-4">Self taught front-end developer with background in architecture.</p>
		<p class="pb-4">Currently doing web development as a freelancer with <strong>Vue, Tailwind CSS, Nuxt</strong> and <strong>Threejs</strong>.</p>
		<p class="pb-4">Have worked with 2D and 3D software like <strong>Blender, AutoCAD, Rhino, Revit, SketchUp, 3DS Max, Photoshop, Illustrator,</strong> etc.</p>
		<p class="pb-4">I enjoy building and creating stuff, experimenting with new technologies, taking pictures, travelling and designing imaginary architecture.</p>
		<p>If you think you need a craftsman with my skills or have questions, feel free to DM me in any of my socials below.</p>
		<p class="pb-4"></p>
		<p> I can speak: Spanish, English, Cantonese.</p>
	</div>
	<p>Go to <NuxtLink class="jpk-main-link" to="blog">/blog
		<IconsBlog class="fill-current w-4 inline-block" />
		</NuxtLink> to read about web stuff.</p>
	<p>If you're interested in my work, you should look into the
	<NuxtLink class="jpk-main-link" to="lab">/lab
		<IconsLab class="fill-current w-4 mb-[2.3px] inline-block" />
	</NuxtLink> section.</p>
</div>
</template>

<script setup>
useHead({
	title: 'Jpokan'
})

const longbio = ref(false)
const show = () => longbio.value = !longbio.value
</script>

