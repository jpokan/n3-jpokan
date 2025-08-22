<template>
	<Transition
		enter-active-class="transition ease-out duration-300"
		enter-from-class="opacity-0 scale-95"
		enter-to-class="opacity-100 scale-100"
		leave-active-class="transition ease-in duration-200"
		leave-from-class="opacity-100 scale-100"
		leave-to-class="opacity-0 scale-95">
		<dialog
			v-if="isOpen"
			class="w-full dark:bg-zinc-900 bg-zinc-100 z-50 fixed h-full inset-0"
			open>
			<TransitionGroup
				enter-active-class="transition ease-out duration-500"
				enter-from-class="opacity-0 translate-y-64 scale-95"
				enter-to-class="opacity-100 translate-y-0 scale-100"
				leave-active-class="transition ease-in duration-150"
				leave-from-class="opacity-100 scale-100"
				leave-to-class="opacity-0 scale-95">
				<div
					v-if="props.selected.navigation?.title"
					:key="props.selected.navigation?.title"
					class="bg-transparent h-full w-full z-10 text-zinc-800 dark:text-zinc-100">
					<div
						class="scroll-none relative h-full w-full overflow-y-auto overflow-hidden scroll-smooth pt-10 pb-20 px-10">
						<div
							v-if="props.selected.navigation?.video"
							class="xl:h-video aspect-[1680/1080] xl:aspect-auto relative grid place-content-center w-full">
							<IconsLoader
								v-if="_loading"
								class="w-10 animate-spin h-fit mx-auto xl:h-video"></IconsLoader>
							<video
								:class="{ 'absolute invisible': _loading }"
								@loadeddata="loaded"
								id="video"
								class="mx-auto h-fit xl:h-video rounded-xl"
								:key="props.selected.navigation?.video"
								:src="props.selected.navigation?.video"
								autoplay
								loop></video>
						</div>
						<h1
							class="mt-16 mb-10 h-fit text-center font-bold font-jost text-5xl lg:text-7xl">
							{{ props.selected.navigation?.title }}
						</h1>
						<p
							v-if="props.selected.navigation?.description"
							class="text-center mb-10">
							{{ props.selected.navigation?.description }}
						</p>
						<img
							id="image"
							v-if="props.selected.navigation?.cover"
							:key="props.selected.navigation?.cover"
							:src="props.selected.navigation?.cover"
							class="mx-auto w-full lg:max-w-[900px]" />
						<div
							id="info"
							class="mx-auto w-full lg:max-w-[900px] prose prose-zinc dark:prose-invert prose-a:no-underline prose-a:font-black prose-headings:uppercase prose-headings:font-semibold prose-h1:font-bold">
							<ContentRenderer
								:prose="true"
								:value="props.selected?.body" />
						</div>
					</div>
				</div>
			</TransitionGroup>
			<div
				class="fixed bottom-5 px-5 lg:px-5 flex gap-4 w-full justify-between flex-wrap">
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
						to="#image"
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
						:to="props.selected.navigation?.url">
						{{ props.selected.navigation?.title }}
						<IconsLink class="w-4" />
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
// const loading = ref(true);

function loaded() {
	console.log("loaded");
	_loading.value = false;
}

function hide() {
	document.body.classList.add("overflow-hidden"); // Tailwind style
}

function unhide() {
	document.body.classList.remove("overflow-hidden");
}

function close() {
	_loading.value = true;
	isOpen.value = false;
	unhide();
}

function open() {
	isOpen.value = true;
	hide();
}

const _loading = useState("prev-loading", () => ref(true));
const _index = useState("prev-index", () => ref(0));
const emit = defineEmits(["next", "back"]);
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
</script>

<style>
.scroll-none::-webkit-scrollbar {
	display: none;
}
</style>
