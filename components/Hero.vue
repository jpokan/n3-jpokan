<template>
	<div class="h-full">
		<p class="pb-4">
			I'm a frontend web developer interested in creating elegant and
			functional digital experiences and applications. I combine my
			knowledge of architecture and design to craft unique projects with
			care.
		</p>
		<p class="pb-4 text-zinc-400 dark:text-zinc-400">
			Have a project in mind? Send me a
			<a href="mailto:contact@jpokan.com" class="underline">message</a>
			.
		</p>
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
