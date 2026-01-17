<template>
	<div class="h-full">
		<!-- <p class="pb-2 text-xl">Hello!</p> -->
		<!-- <p class="pb-5">I'm Jorge,</p> -->
		<!-- <p class="font-medium dark:text-zinc-400 pt-5 pb-2">What i do</p> -->
		<!-- <div class="py-10 text-center font-bold relative"> -->
		<!-- 	<button -->
		<!-- 		@click="show" -->
		<!-- 		class="jpk-link bg-zinc-200 dark:bg-zinc-800 w-10 h-10 rounded-full transition-none"> -->
		<!-- 		<span v-if="longbio">-</span> -->
		<!-- 		<span v-else>+</span> -->
		<!-- 		<ReadMore -->
		<!-- 			class="absolute inset-0 mx-auto my-5 text-4xl font-normal rounded-full w-[5.4rem] h-[5.4rem] hover:-rotate-90 opacity-0 hover:opacity-100 tracking-wider transition duration-500" /> -->
		<!-- 	</button> -->
		<!-- </div> -->
		<p class="pb-4">
			I'm a frontend web developer interested in creating elegant and
			functional digital experiences and applications. I combine my
			knowledge of architecture and design to craft unique projects with
			care.
		</p>
		<!-- <p class="pb-4 text-zinc-900 font-jost text-xl"> -->
		<!-- 	web development | architecture | photography -->
		<!-- </p> -->
		<!-- <p class="dark:text-zinc-400">Stack/Tech</p> -->
		<!-- <ul class="jpk-tools"> -->
		<!-- 	<li class="uppercase">Nuxt / Vue / Tailwind / Threejs</li> -->
		<!-- 	<li class="uppercase">Cloudflare / Netlify / Render</li> -->
		<!-- </ul> -->
		<!-- <p class="pb-4">architecture & design</p> -->
		<!-- <p class="dark:text-zinc-400">Design and digital tools</p> -->
		<!-- <p class="jpk-tools"> -->
		<!-- 	Blender / AutoCAD / Rhino / Revit / SketchUp / Photoshop / -->
		<!-- 	Illustrator / Darktable -->
		<!-- </p> -->
		<!-- <p class="pb-4">photography</p> -->
		<!-- <p class="dark:text-zinc-400">Interests</p> -->
		<!-- <p class="jpk-tools"> -->
		<!-- 	creativity / tech / photography / travel / design / craft -->
		<!-- </p> -->
		<p class="pb-4 text-zinc-400 dark:text-zinc-400">
			Have a project in mind? Send me a
			<a href="mailto:contact@jpokan.com" class="underline">message</a>
			.
		</p>
		<!-- <p class="dark:text-zinc-400"> -->
		<!-- 	I can speak spanish, english, cantonese. Currently learning -->
		<!-- 	japanese. -->
		<!-- </p> -->
		<div class="text-zinc-400 dark:text-zinc-400">
			Go to
			<NuxtLink class="jpk-main-link text-zinc-600" to="blog">
				/blog
				<IconsBlog class="fill-current w-4 inline-block" />
			</NuxtLink>
			to read about recent updates.
		</div>
		<div class="text-zinc-400 dark:text-zinc-400">
			Check the
			<NuxtLink class="jpk-main-link text-zinc-600" to="lab">
				/lab
				<IconsLab class="fill-current w-4 mb-[2.3px] inline-block" />
			</NuxtLink>
			section for more details about my work.
		</div>
	</div>
</template>

<script setup>
useHead({
	title: "Jpokan",
});

const longbio = ref(false);
const show = () => (longbio.value = !longbio.value);
</script>
