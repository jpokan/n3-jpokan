<template>
	<div class="grid grid-cols-[1fr,110px] grid-flow-row">
		<Carousel
			:carousel-options="options"
			id="carousel-post"
			class="f-carousel">
			<div
				class="f-carousel__slide"
				:data-thumb-src="i"
				v-for="i in links">
				<img class="f-panzoom__content" :src="i" alt="" />
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
		display: {
			left: [],
			middle: [
				"zoomIn",
				"zoomOut",
				"toggle1to1",
				"rotateCCW",
				"rotateCW",
				"flipX",
				"flipY",
				"reset",
			],
			right: ["fullscreen"],
		},
	},
	Thumbs: {
		type: "classic",
		Carousel: {
			vertical: true,
		},
	},
	Autoplay: {
		autoStart: false,
		pauseOnHover: true,
		timeout: 5000,
	},
	style: {
		"--f-progressbar-color": "rgba(200,200,200,1)",
		"--f-progressbar-height": "2px",
	},
};
</script>
