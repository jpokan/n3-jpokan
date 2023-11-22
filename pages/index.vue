<template>
	<div class="h-screen p-[52px] fixed inset-0 grid place-items-center">
		<div class="max-w-xl mx-auto bg-gray-100 pr-[104px] sm:pr-0 jpk-theme">
			<p class="text-6xl pb-2 font-medium">Hello!</p>
			<p class="text-6xl pb-5 font-medium">I'm Jorge,</p>
			<p class="text-2xl pb-10">and I build 3D websites and tools for architects.</p>
			<p>Go to <NuxtLink class="jpk-main-link" to="blog">/blog
					<IconsBlog class="fill-current w-4 inline-block" />
				</NuxtLink> to read about web stuff.</p>
			<p>If you're interested in my work, you should look into the <NuxtLink class="jpk-main-link" to="lab">/lab
					<IconsLab class="fill-current w-4 mb-[2.3px] inline-block" />
				</NuxtLink> section.</p>
		</div>
	</div>
</template>

<script setup>
useHead({
	title: 'Jpokan'
})
</script>

