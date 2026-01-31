<template>
	<div class="">
		<Carousel
			:carousel-options="options"
			id="carousel-wordpress"
			class="h-auto overflow-y-auto max-h-[620px]">
			<div
				class="f-carousel__slide"
				:data-thumb-src="i"
				v-for="i in links">
				<img class="object-cover object-top top-0" :src="i" alt="" />
			</div>
		</Carousel>
	</div>
</template>

<script setup>
const links = [
	"https://a.storyblok.com/f/98358/1903x5549/684464ed28/1597218933023.png",
	"https://a.storyblok.com/f/98358/1246x1829/ba4d047db2/ve-arquitectura.png",
	"https://a.storyblok.com/f/98358/1263x1725/65170c8e23/jorgealbertoayllon-com_-laptop-with-mdpi-screen.png",
];

const options = {
	Arrows: {
		prevClass: "p-arrow",
		nextClass: "n-arrow",
		nextTpl:
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m11.22-3.53a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>',
		prevTpl:
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m10.28-3.53a.75.75 0 0 1 0 1.06l-1.72 1.72H16a.75.75 0 0 1 0 1.5H9.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/></svg>',
	},
	adaptiveHeight: true,
	Thumbs: {
		type: "classic",
		// Carousel: {
		// 	vertical: true,
		// },
		thumbTpl:
			'<button  aria-label="Slide to #{{page}}"><img style="object-position: top;" draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>',
	},
	style: {
		"--f-progressbar-color": "rgba(200,200,200,1)",
		"--f-progressbar-height": "2px",
	},
};
</script>
