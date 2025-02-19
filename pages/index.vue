<template>
	<div class="max-w-[502px] mx-auto pr-[104px] sm:pr-0 jpk-theme">
		<p class="text-2xl pb-2 font-medium dark:text-zinc-600">Hello!</p>
		<p class="text-6xl pb-5 font-medium">I'm Jorge,</p>
		<p class="text-2xl dark:text-zinc-400">I build websites and tools related to architecture and design</p>
		<div class="py-10 text-center font-bold relative">
			<button @click="show" class="jpk-link bg-zinc-200 dark:bg-zinc-800 w-10 h-10 rounded-full transition-none">
				<span v-if="longbio">-</span>
				<span v-else>+</span>
				<ReadMore
					class="absolute inset-0 mx-auto my-5 text-4xl font-normal rounded-full w-[5.4rem] h-[5.4rem] hover:-rotate-90 opacity-0 hover:opacity-100 tracking-wider transition duration-500" />
			</button>
		</div>
		<div class="pb-5 h-full" v-show="longbio">
			<p class="pb-4 dark:text-zinc-400">
			With a background in architecture, I am now into web development, combining design and technology to create functional digital experiences. Photography is one of my hobbies, allowing me to explore creativity in a different way.
			</p>
			<p class="font-semibold uppercase pb-4">Frontend web developer</p>
			<p class="dark:text-zinc-400" >Stack/Tech</p>
			<ul class="jpk-tools">
				<li class="uppercase">
					Nuxt / Vue / Tailwind / Threejs
				</li>
				<li class="uppercase">
					Cloudflare / Netlify / Render
				</li>
			</ul>
			<p class="font-semibold uppercase pb-4">architect & designer</p>
			<p class="dark:text-zinc-400">Design and digital tools</p>
			<p class="jpk-tools">Blender / AutoCAD / Rhino / Revit /
				SketchUp / Photoshop / Illustrator / Darktable</p>
			<p class="font-semibold uppercase pb-4">Photographer</p>
			<p class="dark:text-zinc-400">Equipment</p>
			<p class="jpk-tools">CANON R6MKII / 16-35mm 2.8f EF USMIII / 50mm EF 1.4f / 50mm EF 1.8f / 70-200mm EF 4.0f</p>
			<p class="dark:text-zinc-400">Interests</p>
			<p class="jpk-tools">creativity / tech / photography / travel / design / craft</p>
			<p class="pb-4 dark:text-zinc-400">Need a craftsman with my skills? Send me a message.</p>
			<p class="dark:text-zinc-400">I can speak spanish, english, cantonese. Currently learning japanese.</p>
		</div>
		<p class="dark:text-zinc-400">Go to <NuxtLink class="jpk-main-link" to="blog">/blog
				<IconsBlog class="fill-current w-4 inline-block" />
			</NuxtLink> to read about recent updates.</p>
		<p class="dark:text-zinc-400" >If you're interested in my work, you should look into the
			<NuxtLink class="jpk-main-link" to="lab">/lab
				<IconsLab class="fill-current w-4 mb-[2.3px] inline-block" />
			</NuxtLink> section.
		</p>
	</div>
</template>

<script setup>
useHead({
	title: 'Jpokan'
})

const longbio = ref(false)
const show = () => longbio.value = !longbio.value
</script>
