<template>
	<div
		class="grid gap-5 grid-cols-1 lg:grid-cols-4 mx-auto w-fit row-flow-dense">
		<Box size="4x1" class="border-none pb-28 text-6xl">
			<p class="">
				Building digital experiences with architectural thinking and
				design precision
			</p>
		</Box>
		<Box size="2x1">
			<Hero class="p-16" />
		</Box>
		<Box
			link="/lab?preview=/lab/apps/archlogs"
			src="/img/compressed/archlogs.webp"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750709106804.mp4?updatedAt=1750709980684"
			title="Archlogs"
			description="An elegant solution for architects to upload their work and share their portfolio."
			ipos="left-top"
			vpos="right-top"
			size="2x2" />
		<Box
			link="/lab?preview=/lab/apps/heywaffle"
			src="/img/compressed/heywaffle.webp"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750709895677.mp4?updatedAt=1750709982601"
			title="Heywaffle"
			description="A board like web application with a widget system to organize your daily tasks and more."
			position="left-top"
			size="2x2" />
		<Box
			link="/lab?preview=/lab/apps/mockupcities"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750713205441.mp4?updatedAt=1750713233075"
			title="Mockupcities"
			description="A map customization tool that allows exporting the result as an image."
			:vfull="true"
			vpos="contain-center"
			size="2x1" />
		<Box
			link="/lab?preview=/lab/apps/n3-maqueta"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750697436044.mp4?updatedAt=1750699093692"
			description="A minimal GLTF 3D model viewer."
			:vfull="true"
			position="top"
			size="2x1" />
		<Box
			size="2x1"
			description="Daniel Chung portfolio colaboration."
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750711955221.mp4?updatedAt=1750712924484"
			:vfull="true" />
		<Box
			src="/"
			size="1x2"
			title="Webgl and three.js"
			description="Some experiments and demos using webgl and three.js" />
		<Box
			size="2x2"
			description="A flower experiment."
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750696767543.mp4?updatedAt=1750703528504"
			:vfull="true" />
		<Box
			description="Based on dynamic normals."
			size="1x2"
			:vfull="true"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750762980870.mp4?updatedAt=1750763355679" />
		<Box
			description="Particles movement simulation in a flow field."
			ipos="top"
			size="2x2"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1768599100179.mp4"
			:vfull="true" />
		<Box
			size="2x2"
			description="A vector field simulation."
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750763167984.mp4?updatedAt=1750763361898"
			:vfull="true" />
		<Box
			id="totoro"
			:vfull="true"
			size="1x1"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750697975766.mp4?updatedAt=1750703525901" />
		<Box
			size="1x1"
			description="A card scene made with html and css."
			ipos="center"
			src="https://ik.imagekit.io/castles/COVERS/codepen.io_jpokan_full_LYZqWpq.png?updatedAt=1750785490408" />
		<Box
			size="2x1"
			:vfull="true"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750763067979.mp4?updatedAt=1750763359929" />
		<Box
			size="1x1"
			src="/"
			title="Wordpress"
			description="Custom websites made with wordpress" />
		<div
			class="flex gap-5 xl:col-span-3 flex-row xl:max-w-[940px] p-5 box-border">
			<CarouselWordpress class="" />
		</div>
		<!-- <Box src="/" size="1x1" description="" title="" /> -->
		<!-- <Box class="relative w-full xl:col-span-4"></Box> -->
		<!-- <Box -->
		<!-- 	size="2x4" -->
		<!-- 	title="Squidplot" -->
		<!-- 	link="/lab?preview=/lab/wordpress/squidplot" -->
		<!-- 	ipos="contain-top" -->
		<!-- 	description="" -->
		<!-- 	src="https://a.storyblok.com/f/98358/1903x5549/684464ed28/1597218933023.png" /> -->
		<!-- <Box -->
		<!-- 	size="1x1" -->
		<!-- 	link="/lab?preview=/lab/wordpress/ve-arquitectura" -->
		<!-- 	ipos="contain-center" -->
		<!-- 	title="Ve arquitectura" -->
		<!-- 	description="" -->
		<!-- 	src="https://a.storyblok.com/f/98358/1246x1829/ba4d047db2/ve-arquitectura.png" /> -->
		<!-- <Box -->
		<!-- 	title="Jorge Alberto Ayllon" -->
		<!-- 	ipos="contain-center" -->
		<!-- 	size="1x1" -->
		<!-- 	src="https://a.storyblok.com/f/98358/1263x1725/65170c8e23/jorgealbertoayllon-com_-laptop-with-mdpi-screen.png" /> -->
		<Box
			size="4x1"
			src="/"
			title="Architecture"
			description="Models, drafts, drawings and more..." />
		<Box
			size="1x1"
			ipos="center"
			src="https://ik.imagekit.io/castles/JPOKAN/t3/IMG_1244.webp" />
		<Box
			size="1x1"
			ipos="center"
			src="https://ik.imagekit.io/castles/JPOKAN/t3/IMG_1243.webp?updatedAt=1768866576886" />
		<Box
			class=""
			ipos="center"
			src="https://ik.imagekit.io/castles/JPOKAN/t4/IMG_2170.webp?updatedAt=1768866869342"
			size="1x1" />
		<Box
			class=""
			ipos="center"
			src="https://ik.imagekit.io/castles/JPOKAN/t4/IMG_2159.JPG?updatedAt=1768866868415"
			size="1x1" />
		<Box
			ipos="contain-center"
			src="https://ik.imagekit.io/castles/JPOKAN/t6/PANEL%202.webp"
			size="3x1" />
		<Box
			ipos="center"
			size="1x1"
			src="https://ik.imagekit.io/castles/JPOKAN/t4/IMG_2042.webp?updatedAt=1768866869087"
			description="A beach hotel" />
		<Box
			size="1x1"
			ipos="center"
			src="https://ik.imagekit.io/castles/JPOKAN/t9/IMG_0298.webp?updatedAt=1768860877441" />
		<Box
			id="t9"
			src="https://ik.imagekit.io/castles/JPOKAN/t9/PROPUESTA%2010.3-A1%20-%20NIVEL%201.webp"
			size="3x2" />
		<Box src="/" size="1x1" title="" />
		<Box size="4x1" src="/" title="Photography" description="" />
		<Box
			id="fujimi"
			src="https://ik.imagekit.io/castles/JPOKAN/travel/Kyoto/Fushimi%20Inari%20Taisha/2Z7A0024_01.jpg?updatedAt=1736779973930&tr=w-1920"
			size="1x1"
			title=""
			description=""
			ipos="contain-center"
			link="/lab/photography/travel" />
	</div>
</template>
