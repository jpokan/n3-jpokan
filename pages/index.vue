<template>
	<div class="max-w-[502px] mx-auto pr-[104px] sm:pr-0 jpk-theme">
		<p class="text-2xl pb-2 font-medium">Hello!</p>
		<p class="text-6xl pb-5 font-medium">I'm Jorge,</p>
		<p class="text-2xl">I build websites and tools related to architecture and design</p>
		<div class="py-10 text-center font-bold relative">
			<button @click="show" class="jpk-link bg-zinc-200 dark:bg-zinc-800 w-10 h-10 rounded-full transition-none">
				<span v-if="longbio">-</span>
				<span v-else>+</span>
				<ReadMore
					class="absolute inset-0 mx-auto my-5 text-4xl font-normal rounded-full w-[5.4rem] h-[5.4rem] hover:-rotate-90 opacity-0 hover:opacity-100 tracking-wider transition duration-500" />
			</button>
		</div>
		<div class="pb-5 h-full" v-show="longbio">
			<p class="font-medium">Frontend web developer</p>
			<p class="pb-4">Degree in architecture and design</p>
			<p>My stack:</p>
			<ul
			class="pb-4 font-medium">
				<li>
					Nuxt, Vue, Tailwind and Threejs
				</li>
				<li>
					Cloudflare, Netlify and Render
				</li>
			</ul>
			<p class="pb-4">I enjoy building and creating stuff, experimenting with new technologies, taking
				pictures, travelling and designing.</p>
			<p class="pb-4">Tools: Blender, AutoCAD, Rhino, Revit,
					SketchUp, 3DS Max, Photoshop, Illustrator.</p>
			<p class="pb-4">If you think you need a craftsman with my skills or have questions send me a message.</p>
			<p>I can speak spanish, english, cantonese. Currently learning japanese.</p>
		</div>
		<p>Go to <NuxtLink class="jpk-main-link" to="blog">/blog
				<IconsBlog class="fill-current w-4 inline-block" />
			</NuxtLink> to read about recent updates.</p>
		<p>If you're interested in my work, you should look into the
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
