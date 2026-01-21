<template>
	<div ref="container" id="myContainer" class="f-carousel">
		<div id="myCarousel">
			<div class="f-carousel__viewport">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

import { Carousel } from "@fancyapps/ui/dist/carousel/";
import "@fancyapps/ui/dist/carousel/carousel.css";

import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.js";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";

import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

import { Arrows } from "@fancyapps/ui/dist/carousel/carousel.arrows.js";
import "@fancyapps/ui/dist/carousel/carousel.arrows.css";

export default {
	props: {
		carouselOptions: Object,
	},
	setup() {
		const fcInstance = ref(null);

		return {
			fcInstance,
		};
	},
	mounted() {
		this.fcInstance = Carousel(
			this.$refs.container,
			{
				...(this.carouselOptions || {}),
			},
			{
				// Arrows,
				// Autoplay,
				Thumbs,
			},
		).init();
	},
	unmounted() {
		if (this.fcInstance) {
			this.fcInstance.destroy();
			this.fcInstance = null;
		}
	},
};
</script>

<style>
/*
:root {
	--f-thumbs-padding-y: 0px;
	--f-thumbs-padding-x: 0px;
}
*/

.f-thumbs {
	--f-thumbs-gap: 10px;
	--f-thumb-width: 100px;
	--f-thumb-selected-shadow: none;
	--f-thumb-border-radius: 0;
	--f-thumb-opacity: 0.5;
	--f-thumb-selected-opacity: 1;
}

#myContainer {
	--f-thumbs-padding-y: 0px;

	display: grid;
	grid-template-columns: 100% 1fr;

	max-width: 100%;
	margin: 0 auto;
}

#myCarousel {
	--f-carousel-gap: 0px;
	--f-carousel-slide-width: 100%;

	--f-arrow-pos: 10px;
	--f-arrow-width: 38px;
	--f-arrow-height: 38px;
	--f-arrow-svg-width: 16px;
	--f-arrow-svg-height: 16px;
	--f-arrow-svg-stroke-width: 2.5;
	--f-arrow-color: #475569;
	--f-arrow-shadow:
		0 6px 12px -2px rgb(50 50 93 / 25%), 0 3px 7px -3px rgb(0 0 0 / 30%);
	--f-arrow-border-radius: 50%;
	--f-arrow-bg: #fff;
	--f-arrow-hover-bg: #f9f9f9;
	--f-arrow-active-bg: #f0f0f0;

	order: 1;
}

/*
#myCarousel .f-carousel__slide {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
*/

#myCarousel .f-carousel__slide img {
	max-width: 100%;
	height: auto;
}
</style>
