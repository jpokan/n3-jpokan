<template>
	<div
		class="grid gap-5 grid-cols-1 sm:grid-cols-4 mx-auto w-fit overflow-hidden md:max-w-[620px] lg:max-w-[940px] xl:max-w-[1260px] row-flow-dense">
		<div
			class="fixed z-50 left-0 bottom-0 h-5 w-5 m-4 sm:bg-zinc-500 md:bg-red-500 lg:bg-zinc-500 xl:bg-zinc-800"></div>
		<Box class="col-span-4 border-none pb-28 text-6xl">
			<p class="">
				Building digital experiences with architectural thinking and
				design precision
			</p>
		</Box>
		<Box class="col-span-4 lg:col-span-2">
			<Hero class="p-16" />
		</Box>
		<Box
			class="col-span-4 lg:col-span-2 lg:row-span-2"
			link="/lab?preview=/lab/apps/archlogs"
			src="/img/compressed/archlogs.webp"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750709106804.mp4?updatedAt=1750709980684"
			title="Archlogs"
			description="An elegant solution for architects to upload their work and share their portfolio."
			ipos="left-top"
			vpos="right-top"
			imgFit="cover" />
		<Box
			class="col-span-4 lg:col-span-2 lg:row-span-2"
			link="/lab?preview=/lab/apps/heywaffle"
			src="/img/compressed/heywaffle.webp"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750709895677.mp4?updatedAt=1750709982601"
			title="Heywaffle"
			description="A board like web application with a widget system to organize your daily tasks and more."
			imgFit="cover"
			position="left-top" />
		<Box
			class="col-span-4 lg:col-span-2"
			link="/lab?preview=/lab/apps/mockupcities"
			src="https://ik.imagekit.io/castles/COVERS/mockupcities.com_.png?updatedAt=1750785496983"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750713205441.mp4?updatedAt=1750713233075"
			title="Mockupcities"
			imgAspect="1680/1080"
			imgFit="cover"
			description="A map customization tool that allows exporting the result as an image." />
		<Box
			class="col-span-4 sm:col-span-3 lg:col-span-2"
			link="/lab?preview=/lab/apps/n3-maqueta"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750697436044.mp4?updatedAt=1750699093692"
			description="A minimal GLTF 3D model viewer."
			:vfull="true"
			position="top" />
		<Box
			class="sm:col-span-1 row-span-2 hidden sm:block lg:hidden"
			src="/" />
		<Box
			class="col-span-4 sm:col-span-3 lg:col-span-2"
			link="/lab?preview=/lab/webgl/danielchung"
			description="Daniel Chung portfolio colaboration."
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750711955221.mp4?updatedAt=1750712924484"
			:vfull="true" />
		<Box
			class="col-span-4 sm:col-span-4 lg:col-span-1"
			src="/"
			title="Webgl and three.js"
			description="Some experiments and demos using webgl and three.js" />
		<Box
			class="col-span-4 sm:col-span-4 lg:col-span-3"
			description="An image pixelation technique study."
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750696767543.mp4?updatedAt=1750703528504"
			:vfull="true" />
		<Box
			class="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-2"
			description="Particles movement simulation in a flow field."
			ipos="top"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1768599100179.mp4"
			:vfull="true" />
		<Box
			class="col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-2"
			description="A vector field simulation."
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750763167984.mp4?updatedAt=1750763361898"
			:vfull="true" />
		<Box
			vAspect="2/3"
			class="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1"
			description="Based on normals."
			:vfull="true"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750762980870.mp4?updatedAt=1750763355679" />
		<Box
			vAspect="2/3"
			class="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1"
			description="Particles on a sphere."
			:vfull="true"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750697975766.mp4?updatedAt=1750703525901" />
		<Box
			description="A digital 3D layered paper model."
			class="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1"
			:vfull="true"
			vid="https://ik.imagekit.io/castles/VIDEO/cursorful-video-1750763067979.mp4?updatedAt=1750763359929" />
		<Box
			class="col-span-4 md:col-span-2 lg:col-span-1"
			link="/lab?preview=/lab/concepts/card"
			description="A css & html card scene."
			imgAspect="2/3"
			ipos="center"
			imgFit="cover"
			src="https://ik.imagekit.io/castles/COVERS/codepen.io_jpokan_full_LYZqWpq.png?updatedAt=1750785490408" />
		<Box
			class="col-span-4 xl:col-span-1"
			src="/"
			title="Wordpress"
			description="Custom websites made with wordpress" />
		<Box class="col-span-1 lg:col-span-4 xl:col-span-3 xl:max-w-[940px]">
			<CarouselWordpress class="" />
		</Box>
		<Box
			src="/"
			title="Architecture"
			description="Models, drafts, drawings and more..." />
		<Box
			imgAspect="4000/2825"
			ipos="center"
			imgFit="cover"
			description="Intership work"
			class="col-span-4 sm:col-span-2 md:col-span-2"
			src="https://ik.imagekit.io/castles/JPOKAN/practice/20150409%20-%20DELICASS%20CHACARILLA%20imprimir%20MUNI%20A1%20A-01.webp?updatedAt=1769060024345" />
		<Box
			class="col-span-4 sm:col-span-2 md:col-span-1"
			description="Detail drawings"
			ipos="center"
			imgFit="contain"
			src="https://ik.imagekit.io/castles/JPOKAN/planos-de-obra/planos%20de%20obra%202014-38.webp?updatedAt=1769293236948" />
		<Box
			class="col-span-4 sm:col-span-2 md:col-span-1"
			description="Design Studio 01"
			ipos="center"
			imgFit="cover"
			src="https://ik.imagekit.io/castles/JPOKAN/t1/DSCN5687.webp?updatedAt=1768892311716" />
		<Box
			class="col-span-4 sm:col-span-2 md:col-span-1"
			description="Design Studio 02"
			ipos="left"
			imgFit="cover"
			src="https://ik.imagekit.io/castles/JPOKAN/t2/IMG_0665.webp?updatedAt=1768889535200" />
		<Box
			class="col-span-4 sm:col-span-2 md:col-span-1"
			description="Design Studio 03"
			ipos="center"
			imgFit="cover"
			src="https://ik.imagekit.io/castles/JPOKAN/t3/IMG_1241.webp?updatedAt=1769085547359" />
		<Box
			link="/lab?preview=/lab/architecture/w4"
			description="Design Studio 04 - Hotel Bolivar"
			class="col-span-4 sm:col-span-2 md:col-span-1"
			ipos="center"
			imgFit="cover"
			src="https://ik.imagekit.io/castles/JPOKAN/t4/IMG_2170.webp?updatedAt=1768866869342" />
		<Box
			class="col-span-4 sm:col-span-2 md:col-span-1"
			link="/lab?preview=/lab/architecture/w4"
			description="Design Studio 04 - Hotel Cerro Azul"
			ipos="center"
			imgFit="cover"
			src="https://ik.imagekit.io/castles/JPOKAN/t4/IMG_2042.webp?updatedAt=1768866869087" />
		<Box
			class="col-span-4 sm:col-span-2 md:col-span-1"
			link="/lab?preview=/lab/architecture/w6"
			description="Design Studio 06"
			imgFit="cover"
			imgAspect="10/7"
			src="https://ik.imagekit.io/castles/JPOKAN/t6/PANEL%202.webp" />
		<Box
			class="col-span-4 sm:col-span-2 md:col-span-1"
			imgFit="cover"
			description="Design Studio 07"
			src="https://ik.imagekit.io/castles/JPOKAN/t7/panel%20merged.webp?updatedAt=1768892477569" />
		<Box
			class="col-span-4 sm:col-span-2 md:col-span-1"
			description="Design Studio 09"
			imgFit="contain"
			imgAspect="4000/5664"
			ipos="center"
			src="https://ik.imagekit.io/castles/JPOKAN/t9/PANEL%20FINAL.webp?updatedAt=1769096769162" />
		<Box
			class="col-span-4 sm:col-span-2 md:col-span-1"
			ipos="center"
			imgFit="cover"
			src="https://ik.imagekit.io/castles/JPOKAN/t9/IMG_0298.webp?updatedAt=1768860877441" />
		<Box src="/" title="Photography" description="" />
		<Box
			src="https://ik.imagekit.io/castles/JPOKAN/travel/Kyoto/Fushimi%20Inari%20Taisha/2Z7A0024_01.jpg?updatedAt=1736779973930&tr=w-1920"
			title=""
			description=""
			link="/lab/photography/travel" />
	</div>
</template>
