<template>
	<div class="absolute inset-x-0 overflow-hidden">
		<div
			class="line-animation w-full dark:bg-zinc-400/80 bg-zinc-500/80 h-1"></div>
	</div>
</template>
<style lang="css">
.line-animation {
	animation: zip 1s ease-in infinite;
}
@keyframes zip {
	from {
		width: 0%;
		transform: translateX(0);
	}
	to {
		width: 100%;
		transform: translateX(100%);
	}
}
</style>
