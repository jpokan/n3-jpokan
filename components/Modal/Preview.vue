<template>
	<Transition
		enter-active-class="transition ease-out duration-200"
		enter-from-class="opacity-0 scale-95"
		enter-to-class="opacity-100 scale-100"
		leave-active-class="transition ease-in duration-100"
		leave-from-class="opacity-100 scale-100"
		leave-to-class="opacity-0 scale-95">
		<dialog
			v-if="isOpen"
			class="w-full dark:bg-zinc-900 bg-zinc-100 z-50 fixed h-full inset-0"
			open>
			<TransitionGroup
				enter-active-class="transition ease-out duration-200"
				enter-from-class="opacity-0 translate-y-64 scale-95"
				enter-to-class="opacity-100 translate-y-0 scale-100"
				leave-active-class="transition ease-in duration-100"
				leave-from-class="opacity-100 scale-100"
				leave-to-class="opacity-0 scale-95">
				<div
					v-if="props.selected.navigation?.title"
					:key="props.selected.navigation?.title"
					class="bg-transparent h-full w-full z-10 text-zinc-800 dark:text-zinc-100">
					<div
						class="scroll-none relative h-full w-full overflow-y-auto overflow-hidden flex flex-col gap-10 scroll-smooth pt-10 pb-20 px-10">
						<div
							v-if="props.selected.navigation?.video"
							class="lg:h-video aspect-[1680/1080] relative grid place-content-center w-full">
							<IconsLoader
								v-if="_loading"
								class="w-10 animate-spin h-fit mx-auto lg:h-video"></IconsLoader>
							<video
								:class="{ 'absolute invisible': _loading }"
								@loadeddata="loaded"
								id="video"
								class="mx-auto h-fit lg:h-video"
								:key="props.selected.navigation?.video"
								:src="props.selected.navigation?.video"
								autoplay
								loop></video>
						</div>
						<div
							id="previewImage"
							v-if="props.selected.navigation?.cover"
							:key="props.selected.navigation?.cover"
							class="w-full max-w-xl mx-auto">
							<img
								:src="props.selected.navigation?.cover"
								class="mx-auto lg:object-contain"
								alt="" />
						</div>
						<h1
							class="pt-10 h-fit text-center font-black font-jost text-5xl">
							{{ props.selected.navigation?.title }}
						</h1>
						<p
							v-if="props.selected.navigation?.description"
							class="text-center">
							{{ props.selected.navigation?.description }}
						</p>
						<div
							id="info"
							class="mx-auto w-full max-w-xl prose-img:m-0 prose prose-zinc dark:prose-invert prose-a:no-underline prose-a:font-black prose-headings:uppercase prose-headings:font-semibold prose-h1:font-bold">
							<ContentRenderer
								:prose="true"
								:value="props.selected?.body" />
						</div>
					</div>
				</div>
			</TransitionGroup>
			<div
				class="fixed bottom-5 px-5 lg:px-5 flex gap-4 w-full justify-between flex-wrap z-20">
				<div class="flex gap-4">
					<ModalButton @click="back">
						<IconsLeft class="w-4" />
					</ModalButton>
					<ModalButton @click="next">
						<IconsRight class="w-4" />
					</ModalButton>
				</div>
				<div class="flex gap-4 flex-wrap">
					<ModalLink
						to="#previewImage"
						v-if="props.selected.navigation?.cover">
						<IconsImage class="w-4" />
					</ModalLink>
					<ModalLink
						to="#video"
						v-if="props.selected.navigation?.video">
						<IconsVideo class="w-4" />
					</ModalLink>
					<ModalLink
						class="w-auto px-5"
						target="_blank"
						:to="
							props.selected.navigation?.url
								? props.selected.navigation?.url
								: ''
						">
						{{ props.selected.navigation?.title }}
						<IconsGoOutside class="ml-2 w-4 h-4" />
					</ModalLink>
					<ModalLink
						v-if="props.selected.body.value.length > 0"
						to="#info">
						<IconsInfo class="w-4" />
					</ModalLink>
				</div>
				<div class="flex gap-4 sm:w-24 justify-end">
					<ModalButton @click="close">
						<IconsClose class="w-4" />
					</ModalButton>
				</div>
			</div>
		</dialog>
	</Transition>
</template>

<script setup>
const props = defineProps({
	selected: {
		type: Object,
		default: {},
	},
});

const isOpen = ref(false);

const _loading = useState("prev-loading", () => ref(true));
const _index = useState("prev-index", () => ref(0));
const emit = defineEmits(["next", "back", "loaded", "close"]);

function loaded() {
	console.log("loaded preview");
	emit("loaded");
	_loading.value = false;
}

function hide() {
	document.body.classList.add("overflow-hidden"); // Tailwind style
}

function unhide() {
	document.body.classList.remove("overflow-hidden");
}

function close() {
	emit("close");
	_loading.value = true;
	isOpen.value = false;
	unhide();
}

function open() {
	isOpen.value = true;
	hide();
}
function next() {
	emit("next");
}
function back() {
	emit("back");
}

defineExpose({
	open,
	close,
	next,
	back,
});

onUnmounted(() => {
	close();
});

const handleEscKey = (e) => {
	if (e.key === "Escape") {
		console.log("ESC pressed globally");
		close();
	}
};

onMounted(() => {
	window.addEventListener("keydown", handleEscKey);
});

onBeforeUnmount(() => {
	window.removeEventListener("keydown", handleEscKey);
});
</script>

<style>
.scroll-none::-webkit-scrollbar {
	display: none;
}
</style>
