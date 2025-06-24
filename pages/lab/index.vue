<template>
	<ModalPreview
		ref="preview"
		:video="video"
		:title="title"
		:url="url"
		:cover="cover"
	/>
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 relative"
	>
		<div v-for="item in data[0].children" key="item">
			<div class="font-semibold text-sm mb-5 uppercase">
				{{ item.title }}
			</div>
			<ul class="mb-5">
				<li v-for="i in item.children">
					<NuxtLink class="jpk-sublink" v-if="i.i_url" :to="i.i_url">
						{{ i.title }}
					</NuxtLink>
					<button
						@click="setPreview(i.video, i.title, i.url, i.cover)"
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

const preview = useTemplateRef("preview");
function setPreview(v, t, u, c) {
	preview.value.open();
	video.value = v;
	title.value = t;
	url.value = u;
	cover.value = c;
}

useHead({
	title: "Lab",
});

const video = ref("");
const title = ref("");
const url = ref("");
const cover = ref("");
</script>
