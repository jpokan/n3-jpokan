<template>
	<div class="text-sm font-medium uppercase sm:pr-0 grid gap-5">
		<FancyBox
			:fancybox-options="options"
			v-for="(item, index) in list"
			:key="item.id">
			<div
				class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-0.5">
				<span
					class="sm:aspect-[4/5] text-zinc-300 dark:text-zinc-700 mr-3 font-bold">
					{{ item.navigation.location }}
				</span>
				<div class="sm:aspect-[4/5] mr-5">
					{{ item.title }}
				</div>
				<a
					v-for="i in item.navigation.images"
					:data-fancybox="`gallery-${index}`"
					:href="`${i}&tr=w-1920`">
					<!-- thumbnail x2 150px - 300px -->
					<div class="aspect-[4/5] w-full h-full">
						<img
							v-lazy="{ src: `${i}&tr=w-600` }"
							class="object-cover w-full h-full" />
					</div>
				</a>
			</div>
		</FancyBox>
	</div>
</template>

<script setup>
import { config } from "~/assets/js/fancyboxOptions.js";
defineProps(["list"]);

const colorMode = useColorMode();
const options = ref(config);

watch(colorMode, async (newMode, oldMode) => {
	// update theme on change
	options.value = {
		theme: colorMode.value,
		...config,
	};
});
</script>
