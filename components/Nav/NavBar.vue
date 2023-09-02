<template>
	<div class="fixed right-0 mx-4 bottom-1/2 transform translate-y-1/2">
		<div class="grid items-center h-full">
			<div
				class="flex flex-col text-center  p-2 gap-5 dark:bg-zinc-900 bg-zinc-100 dark:border-zinc-400 border-zinc-400 border rounded-lg shadow-lg md:shadow-none md:border-none">
				<div v-for="item in elements" :key="item.title"
					class="hover:text-black dark:hover:text-white transition-colors duration-200">
					<NuxtLink class="font-medium font-limelight" v-if="item.type === 'text'" :to="item.to"
						:title="item.title">
						{{ item.text }}
					</NuxtLink>
					<NuxtLink v-if="item.type === 'icon'" :to="item.to" :title="item.title">
						<NavComp :component="item.component" />
					</NuxtLink>
					<NavComp v-if="item.type === 'theme'" :component="item.component" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { IconsBlog, IconsLab, ColorModeSwitcher } from '#components';

const elements = shallowRef([
	{ text: "JP", to: "/", title: "Home", component: false, type: 'text' },
	{ text: "", to: "/blog", title: "Blog", component: IconsBlog, type: 'icon' },
	{ text: "", to: "/lab", title: "Lab", component: IconsLab, type: 'icon' },
	{ text: "", to: "#", title: "Toggle Color Scheme", component: ColorModeSwitcher, type: 'theme' },
]);
</script>
