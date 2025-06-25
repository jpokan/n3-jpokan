<template>
	<Transition
		enter-active-class="transition ease-out duration-300"
		enter-from-class="opacity-0 scale-95"
		enter-to-class="opacity-100 scale-100"
		leave-active-class="transition ease-in duration-200"
		leave-from-class="opacity-100 scale-100"
		leave-to-class="opacity-0 scale-95"
	>
		<dialog
			v-if="isOpen"
			class="w-full dark:bg-zinc-900 bg-zinc-100 z-50 fixed h-full inset-0"
			open
		>
			<div
				class="fixed top-0 grid place-content-center h-full w-full -z-10"
			>
				<Loader
					v-if="loading"
					class="w-10 h-10 mx-auto animate-spin text-zinc-500"
				/>
			</div>
			<TransitionGroup
				enter-active-class="transition ease-out duration-500"
				enter-from-class="opacity-0 translate-y-64 scale-95"
				enter-to-class="opacity-100 translate-y-0 scale-100"
				leave-active-class="transition ease-in duration-150"
				leave-from-class="opacity-100 scale-100"
				leave-to-class="opacity-0 scale-95"
			>
				<div
					v-if="props.selected?.title"
					:key="props.selected?.title"
					class="h-full w-full p-10 z-10 text-zinc-800 dark:text-zinc-100"
				>
					<div
						class="h-full grid grid-cols-1 w-full overflow-y-auto overflow-x-hidden scroll-smooth"
					>
						<video
							id="video"
							v-if="props.selected?.video"
							@load="loading = false"
							class="mx-auto w-full lg:max-w-[1070px]"
							:key="props.selected?.video"
							:src="props.selected?.video"
							autoplay
							loop
						></video>
						<h1
							class="mt-16 mb-10 text-center font-bold font-jost text-5xl lg:text-7xl"
						>
							{{ props.selected?.title }}
						</h1>
						<p
							v-if="props.selected?.description"
							class="text-center mb-10"
						>
							{{ props.selected?.description }}
						</p>
						<img
							id="image"
							@load="loading = false"
							v-if="props.selected?.cover"
							:key="props.selected?.cover"
							:src="props.selected?.cover"
							class="mx-auto w-full lg:max-w-[900px]"
						/>
					</div>
				</div>
			</TransitionGroup>
			<div
				class="fixed mx-auto max-w-fit inset-x-0 bottom-5 flex gap-5 w-full justify-center"
			>
				<ModalButton @click="$emit('back')">
					<IconsLeft class="w-4" />
				</ModalButton>
				<ModalButton @click="$emit('next')">
					<IconsRight class="w-4" />
				</ModalButton>
				<ModalLink to="#image" v-if="props.selected?.cover">
					<IconsImage class="w-4" />
				</ModalLink>
				<ModalLink to="#video" v-if="props.selected?.video">
					<IconsVideo class="w-4" />
				</ModalLink>
				<NuxtLink
					class="border dark:border-zinc-700 flex items-center rounded-full py-1.5 px-5 text-zinc-800 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800"
					target="_blank"
					:to="props.selected?.url"
					>{{ props.selected?.title }}
					<svg
						class="ml-1 w-4 h-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1"
						/>
					</svg>
				</NuxtLink>
				<ModalButton @click="close">
					<IconsClose />
				</ModalButton>
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
const loading = ref(true);

function hide() {
	document.body.classList.add("overflow-hidden"); // Tailwind style
}

function unhide() {
	document.body.classList.remove("overflow-hidden");
}

function close() {
	isOpen.value = false;
	unhide();
}

function open() {
	isOpen.value = true;
	hide();
}

function next() {}
function back() {}

defineExpose({
	open,
	close,
	next,
	back,
});
</script>
