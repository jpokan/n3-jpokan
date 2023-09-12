<template>
	<div class="fixed right-[52px] bottom-1/2 transform translate-y-1/2 sm:top-[52px] sm:translate-y-0 sm:h-[52px]">
		<div class="flex flex-col leading-none sm:flex-row text-center items-center p-4 gap-5">
			<div v-for="item in elements" :key="item.title" class="h-5 w-5">
				<NuxtLink class="font-bold font-jost w-full h-full" v-if="item.type === 'text'" :to="item.to"
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
