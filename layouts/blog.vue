<template>
	<div class="jpk-theme p-[52px] min-h-screen font-satoshi relative">
		<Logo subtitle="blog" class="mr-[52px]" />
		<NavBar class="z-10 jpk-theme" />
		<div class="pt-[52px] mt-[104px] pb-[104px] mx-auto max-w-xl">
			<slot />
		</div>
		<Footer class="z-10" />
	</div>
</template>
