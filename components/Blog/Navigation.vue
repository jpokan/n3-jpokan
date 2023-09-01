<template>
	<div class="grid grid-flow-row grid-cols-2 py-5">
		<div class="text-left">
			<nuxt-link class="" v-if="navigation.prev" :to="`/${navigation.prev}`"
				><IconsLeft class="w-5 h-5 fill-current inline" />previous</nuxt-link
			>
		</div>
		<div class="text-right">
			<nuxt-link class="" v-if="navigation.next" :to="`/${navigation.next}`"
				>next<IconsRight class="w-5 h-5 fill-current inline"
			/></nuxt-link>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			navigation: {
				type: Object,
				default() {
					return {
						next: '/',
						prev: '/'
					}
				}
			}
		},
		data: () => {
			return {
				index: null
			}
		}
	}
</script>
