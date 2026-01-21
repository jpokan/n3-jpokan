<template>
	<div
		ref="target"
		@mouseenter="toVid"
		@mouseleave="toImg"
		class="flex flex-col justify-between gap-5 p-5 relative mx-auto box-border"
		:class="[
			{ 'overflow-hidden': src && vid },
			wh[size],
			{ 'hover:bg-zinc-200/20 dark:hover:bg-black/50': bg },
		]">
		<div
			:style="`min-height:${initHeight};`"
			class="h-full"
			v-if="src || vid">
			<Transition
				enter-from-class="opacity-0 translate-x-full"
				enter-to-class="opacity-100 translate-x-0"
				enter-active-class="transition-all duration-150 delay-200 ease-in"
				leave-from-class="opacity-100 translate-x-0"
				leave-to-class="opacity-0 translate-x-full"
				leave-active-class="transition-all duration-200 ease-in">
				<div
					class="h-full pattern-diagonal min-h-20"
					v-if="src && swapState === 'img'">
					<img
						onerror="this.style.display='none'"
						ref="imgRef"
						class="h-full object-cover"
						:class="[pos[ipos]]"
						:src="src"
						:alt="alt" />
				</div>
			</Transition>
			<Transition
				enter-from-class="opacity-0 -translate-x-full"
				enter-to-class="opacity-100 translate-x-0"
				enter-active-class="transition-all duration-150 delay-200 ease-in"
				leave-from-class="opacity-100 translate-x-0"
				leave-to-class="opacity-0 -translate-x-full"
				leave-active-class="transition-all duration-200 ease-in">
				<div
					v-if="vid && swapState === 'vid'"
					class="h-full"
					:class="[{ 'p-5 absolute inset-x-0 top-0': src }]">
					<LoaderLine :class="[{ invisible: loaded }]" class="mx-5" />
					<video
						@loadeddata="handleLoaded"
						ref="vidRef"
						class="object-cover w-full aspect-[1.56]"
						:class="[
							pos[vpos],
							{ relative: swapState === 'img' },
							{ '!object-center h-full': vfull },
						]"
						:src="vid"
						disablepictureinpicture
						controlslist="nofullscreen nodownload noremoteplayback noplaybackrate"
						loop></video>
				</div>
			</Transition>
		</div>
		<slot></slot>
		<div v-if="title || description" class="">
			<h3 v-if="title" class="font-jost font-bold pb-3">
				{{ title }}
			</h3>
			<p v-if="description" class="">{{ description }}</p>
		</div>
		<NuxtLink
			v-if="link"
			:to="link"
			@click="swap"
			class="transition w-4 h-4 absolute bottom-1 right-1 rounded-lg hover:bg-zinc-400 dark:hover:bg-zinc-500 dark:bg-zinc-700 bg-zinc-300">
			<IconsUp
				v-if="!loadIcon"
				class="text-zinc-100 dark:text-zinc-900" />
			<IconsLoader
				v-else
				class="animate-spin text-zinc-100 dark:text-zinc-900" />
		</NuxtLink>
	</div>
</template>

<script setup>
const props = defineProps({
	title: String,
	description: String,
	link: String,
	bg: {
		type: Boolean,
		default: false,
	},
	vpos: {
		type: String,
		default: "left-top",
	},
	ipos: {
		type: String,
		default: "left-top",
	},
	vid: String,
	src: String,
	alt: String,
	vfull: Boolean,
	size: {
		type: String,
		default: "reset",
	},
});

const wh = {
	reset: "xl:max-w-[1260px] xl:max-h-[1260px]",
	"1x1": "w-full xl:w-[300px] lg:col-span-2 xl:col-span-1",
	"1x2": "w-full xl:w-[300px] lg:col-span-2 xl:col-span-1 lg:row-span-2",
	"2x1": "w-full xl:w-[620px] lg:col-span-2 xl:col-span-2",
	"2x2": "w-full xl:w-[620px] lg:col-span-2 xl:col-span-2 lg:row-span-2",
	"2x3": "w-full xl:w-[620px] lg:col-span-2 xl:col-span-2 xl:row-span-3",
	"2x4": "w-full xl:w-[620px] lg:col-span-2 xl:col-span-2 xl:row-span-4",
	"3x1": "w-full xl:w-[940px] xl:col-span-3",
	"3x2": "w-full xl:w-[940px] xl:row-span-2 xl:col-span-3",
	"4x1": "w-full xl:w-[1260px] lg:col-span-4 xl:col-span-4",
	"4x2": "w-full xl:w-[1260px] xl:col-span-4 lg:row-span-2",
};

const pos = {
	"contain-top": "!object-contain object-top",
	"contain-center": "!object-contain object-center",
	center: "object-center",
	top: "object-top",
	right: "object-right",
	left: "object-left",
	bottom: "object-bottom",
	"left-top": "object-left-top",
	"right-top": "object-right-top",
	"left-bottom": "object-left-bottom",
	"right-bottom": "object-right-bottom",
};

const imgRef = useTemplateRef("imgRef");
const vidRef = useTemplateRef("vidRef");

const swapState = ref("");
const initHeight = ref();
const loaded = ref(false);
const loadIcon = ref(false);

function swap() {
	loadIcon.value = true;
}

function play() {
	try {
		vidRef.value?.play();
	} catch (e) {}
}

function pause() {
	try {
		vidRef.value.pause();
	} catch (e) {}
}

function handleResize() {
	initHeight.value = "";
}

onMounted(() => {
	if (props.src) {
		swapState.value = "img";
		window.addEventListener("resize", handleResize);
	}
	if (!props.src && props.vid) {
		swapState.value = "vid";
	}
});

onBeforeUnmount(() => {
	if (props.src) {
		window.removeEventListener("resize", handleResize);
	}
});

function toVid(e) {
	console.log("in");
	// set box initial box height
	if (props.src) {
		initHeight.value = `${imgRef.value.offsetHeight}px`;
	}
	if (props.vid) {
		swapState.value = "vid";
	}
	play();
}

function toImg(e) {
	console.log("out");
	if (props.src) {
		swapState.value = "img";
	}
	pause();
}

function handleLoaded() {
	loaded.value = true;
	console.log("video loaded");
	if (props.src) {
		play();
	}
}
</script>

<style></style>
