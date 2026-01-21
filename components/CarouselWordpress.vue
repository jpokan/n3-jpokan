<template>
	<Carousel :carousel-options="options">
		<div
			class="f-carousel__slide !overflow-y-auto !max-h-[620px]"
			:data-thumb-src="i"
			v-for="i in links">
			<img class="object-cover object-top top-0" :src="i" alt="" />
		</div>
		<!-- <div ref="thumbs" class="border bg-gray-400">ses</div> -->
	</Carousel>
</template>

<script setup>
const links = [
	"https://a.storyblok.com/f/98358/1903x5549/684464ed28/1597218933023.png",
	"https://a.storyblok.com/f/98358/1246x1829/ba4d047db2/ve-arquitectura.png",
	"https://a.storyblok.com/f/98358/1263x1725/65170c8e23/jorgealbertoayllon-com_-laptop-with-mdpi-screen.png",
];

const thumbs = ref(null);

const options = {
	Thumbs: {
		// parentEl: thumbs.value,
		// parentEl: thumbs,
		type: "classic",
		Carousel: {
			vertical: true,
			// center: (ref) => {
			// 	return ref.getTotalSlideDim() > ref.getViewportDim();
			// },
		},
	},
	Autoplay: {
		showProgressbar: false,
		timeout: 3000,
	},
};
</script>
