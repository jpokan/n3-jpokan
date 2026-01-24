<template>
	<div ref="container">
		<div class="f-carousel__viewport" style="transition: height 0.2s">
			<slot></slot>
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

import { Zoomable } from "@fancyapps/ui/dist/carousel/carousel.zoomable.js";
import "@fancyapps/ui/dist/carousel/carousel.zoomable.css";

import { Toolbar } from "@fancyapps/ui/dist/carousel/carousel.toolbar.js";
import "@fancyapps/ui/dist/carousel/carousel.toolbar.css";

import { Lazyload } from "@fancyapps/ui/dist/carousel/carousel.lazyload.js";

import { Fullscreen } from "@fancyapps/ui/dist/carousel/carousel.fullscreen.js";
import "@fancyapps/ui/dist/carousel/carousel.fullscreen.css";

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
				Toolbar,
				Autoplay,
				Thumbs,
				Zoomable,
				Lazyload,
				Fullscreen,
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

<style></style>
