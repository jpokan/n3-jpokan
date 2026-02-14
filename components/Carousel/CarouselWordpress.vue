<template>
	<div class="">
		<Carousel
			id="carousel-wordpress"
			:carousel-options="options"
			class="h-auto overflow-y-auto max-h-[620px]">
			<div
				class="f-carousel__slide"
				:data-thumb-src="`${i}&tr=w-100`"
				v-for="i in links">
				<img
					class="object-cover object-top top-0"
					:src="`${i}&tr=w-1200`"
					alt="" />
			</div>
		</Carousel>
	</div>
</template>

<script setup>
const links = [
	"https://ik.imagekit.io/castles/COVERS/1597218933023.png?updatedAt=1770032557797",
	"https://ik.imagekit.io/castles/COVERS/ve-arquitectura.png?updatedAt=1770032556444",
	"https://ik.imagekit.io/castles/COVERS/jorgealbertoayllon-com_-laptop-with-mdpi-screen.png?updatedAt=1770032556459",
];

const options = {
	adaptiveHeight: true,
	Thumbs: {
		type: "classic",
		thumbTpl:
			'<button  aria-label="Slide to #{{page}}"><img style="object-position: top;" draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>',
	},
	style: {
		"--f-progressbar-color": "rgba(200,200,200,1)",
		"--f-progressbar-height": "2px",
	},
};
</script>
