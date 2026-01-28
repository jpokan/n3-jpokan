<template>
	<div
		ref="target"
		@mouseenter="toVid"
		@mouseleave="toImg"
		class="flex flex-col justify-between gap-5 p-5 relative mx-auto box-border w-full"
		:class="[
			{ 'overflow-hidden': src && vid },
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
						:style="imgStyle"
						onerror="this.style.display='none'"
						class="h-full w-full"
						ref="imgRef"
						:class="[pos[ipos], aspects[imgAspect], fit[imgFit]]"
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
					class="h-full w-ful"
					:class="[{ 'p-5 absolute inset-x-0 top-0': src }]">
					<LoaderLine :class="[{ invisible: loaded }]" class="mx-5" />
					<video
						@loadeddata="handleLoaded"
						ref="vidRef"
						class="w-full"
						:class="[
							aspects[vAspect],
							fit[vFit],
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
			@click="goToLink"
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
	imgStyle: String,
	imgAspect: String,
	imgFit: String,
	vFit: {
		type: String,
		default: "cover",
	},
	vAspect: {
		type: String,
		default: "aspect-[14/9]",
	},
});

const fit = {
	contain: "object-contain",
	cover: "object-cover",
	fill: "object-fill",
	none: "object-none",
};

const aspects = {
	"1/1": "aspect-[1/1]",
	"1/2": "aspect-[1/2]",
	"2/1": "aspect-[2/1]",
	"2/3": "aspect-[2/3]",
	"3/2": "aspect-[3/2]",
	"3/4": "aspect-[3/4]",
	"4/3": "aspect-[4/3]",
	"4/5": "aspect-[4/5]",
	"5/4": "aspect-[5/4]",
	"10/7": "aspect-[10/7]",
	"14/9": "aspect-[14/9]",
	"16/10": "aspect-[16/10]",
	"1680/1080": "aspect-[1680/1080]",
	"4000/2825": "aspect-[4000/2825]",
	"4000/5664": "aspect-[4000/5664]",
};

const pos = {
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

function goToLink() {
	loadIcon.value = true;
	setTimeout(() => {
		// resets the icon
		loadIcon.value = false;
	}, 3000);
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
	// set box initial box height only if src and vid exists
	if (props.src && props.vid) {
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
