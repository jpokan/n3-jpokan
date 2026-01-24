<template>
	<div class="flex flex-row">
		<Carousel :carousel-options="options" class="">
			<div
				class="f-carousel__slide !overflow-y-auto !max-h-[620px]"
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
	Thumbs: {
		type: "classic",
		Carousel: {
			vertical: true,
		},
		thumbTpl:
			'<button  aria-label="Slide to #{{page}}"><img style="object-position: top;" draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>',
	},
	Autoplay: {
		pauseOnHover: true,
		timeout: 5000,
	},
	style: {
		"--f-progressbar-color": "rgba(200,200,200,1)",
		"--f-progressbar-height": "2px",
	},
};
</script>
