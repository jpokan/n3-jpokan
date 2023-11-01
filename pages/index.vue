<template>
	<div class="h-screen p-[52px] fixed inset-0 grid place-items-center">
		<div class="max-w-xl mx-auto bg-gray-100 pr-[104px] sm:pr-0 jpk-theme">
			<p>A bit of space where I show my work and write my thoughts.</p>
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

