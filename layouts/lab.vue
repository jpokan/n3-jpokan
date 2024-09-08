<template>
	<div class="jpk-theme p-[52px] font-satoshi min-h-screen relative">
		<Logo subtitle="lab" class="mr-[52px]" />
		<NavBar class="z-10 jpk-theme" />
		<div class="pt-[52px] mt-[104px] pb-[104px]">
			<slot />
		</div>
		<Footer class="z-10" />
	</div>
</template>
