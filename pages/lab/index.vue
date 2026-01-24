<template>
	<ModalPreview
		ref="preview"
		:selected="selected"
		@close="handleClose"
		@next="next"
		@back="back" />
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 relative">
		<div v-for="item in categories[0].children" key="item">
			<div class="font-semibold text-sm mb-5 uppercase">
				{{ item.title }}
			</div>
			<ul class="mb-5">
				<li v-for="(i, index) in item.children">
					<NuxtLink class="jpk-sublink" v-if="i.i_url" :to="i.i_url">
						{{ i.title }}
					</NuxtLink>
					<button
						v-if="i.url"
						@click="setPreview(i.path)"
						class="jpk-sublink">
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

const { data: categories } = await useAsyncData("lab-navigation", () => {
	return queryCollectionNavigation("lab", ["meta"]);
});

const { data: projects } = await useAsyncData("all-lab", () => {
	return queryCollection("lab")
		.where("path", "NOT LIKE", "/lab/photography/%")
		.andWhere((query) => query.where("stem", "NOT LIKE", "%/%/index"))
		.all();
});

const selected = ref({});
const _index = useState("prev-index", () => ref(0));
const preview = useTemplateRef("preview");
const route = useRoute();
const router = useRouter();

function replaceQuery(path, hash) {
	router.replace({
		query: {
			...route.query,
			preview: path,
		},
		hash: hash,
	});
}

function handleIndex(path) {
	const index = findIndexByPath(path);
	selected.value = projects.value[index];
	_index.value = index;
}

function setPreview(path, hash) {
	handleIndex(path);
	replaceQuery(path, hash);
	preview.value.open();
}

function findIndexByPath(path) {
	const index = projects.value.findIndex((e) => e.path === path);
	return index;
}

function handleClose() {
	router.replace({
		query: {},
	});
}

onMounted(() => {
	const queryPath = route.query?.preview;
	const queryHash = route.hash;
	if (queryPath) {
		setPreview(queryPath, queryHash);
	}
});

const _loading = useState("prev-loading");
function back() {
	// check if is 0, don't go any less
	if (_index.value === 0) {
		return;
	}
	_loading.value = true;
	_index.value -= 1;
	selected.value = projects.value[_index.value];
	replaceQuery(selected.value.path);
}

function next() {
	// check if is maximum length
	if (_index.value === projects.value.length - 1) {
		return;
	}
	_loading.value = true;
	_index.value += 1;
	selected.value = projects.value[_index.value];
	replaceQuery(selected.value.path);
}
useHead({
	title: "Lab",
});
</script>
