<template>
	<ModalPreview
		ref="preview"
		:selected="selected"
		@next="next"
		@back="back"
	/>
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 relative"
	>
		<div v-for="item in data[0].children" key="item">
			<div class="font-semibold text-sm mb-5 uppercase">
				{{ item.title }}
			</div>
			<ul class="mb-5">
				<li v-for="(i, index) in item.children">
					<NuxtLink class="jpk-sublink" v-if="i.i_url" :to="i.i_url">
						{{ i.title }}
					</NuxtLink>

					<button
						@click="setPreview(i)"
						class="jpk-sublink"
						v-if="i.url"
					>
						{{ i.title }}
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "lab",
});

const { data } = await useAsyncData("lab-navigation", () => {
	return queryCollectionNavigation("lab", ["meta"]);
});

const list = [];
function makelist() {
	for (let index = 0; index < data.value[0].children.length; index++) {
		const element = data.value[0].children[index];
		// console.log(element);
		element.children.forEach((el) => {
			if (el.stem.includes("index")) {
				return;
			}
			list.push(el);
		});
	}
}

makelist();

const selected = ref({});
const _index = ref(0);

const preview = useTemplateRef("preview");
function setPreview(item) {
	const index = list.findIndex((e) => e.path === item.path);
	preview.value.open();
	selected.value = item;
	_index.value = index;
}

function back() {
	// check if is 0, don't go any less
	if (_index.value === 0) {
		return;
	}
	_index.value -= 1;
	selected.value = list[_index.value];
}

function next() {
	// check if is maximum length
	if (_index.value === list.length - 1) {
		return;
	}
	_index.value += 1;
	selected.value = list[_index.value];
}
useHead({
	title: "Lab",
});
</script>
