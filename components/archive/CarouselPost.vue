<template>
	<div class="grid grid-cols-[1fr,110px] grid-flow-row">
		<Carousel
			id="carousel-post"
			:carousel-options="options"
			:delay="200"
			class="f-carousel">
			<div
				class="f-carousel__slide"
				:data-thumb-src="i"
				:key="i"
				v-for="i in links">
				<img :data-lazy-src="i" class="f-panzoom__content" alt="" />
			</div>
		</Carousel>
	</div>
</template>

<script setup>
const props = defineProps({
	links: {
		type: Array,
		default: [],
	},
});

const options = {
	Toolbar: {
		absolute: true,
		display: {
			left: [],
			middle: ["zoomIn", "zoomOut", "fullscreen"],
			right: [""],
		},
	},
	Thumbs: {
		type: "classic",
		Carousel: {
			vertical: true,
		},
	},
	style: {
		"--f-progressbar-color": "rgba(200,200,200,1)",
		"--f-progressbar-height": "5px",
	},
};
</script>
