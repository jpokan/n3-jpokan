<script>
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
	props: {
		fancyboxOptions: Object,
	},
	mounted() {
		Fancybox.bind(this.$refs.container, "[data-fancybox]", {
			...(this.fancyboxOptions || {}),
		});
	},
	updated() {
		Fancybox.unbind(this.$refs.container);

		Fancybox.close();

		Fancybox.bind(this.$refs.container, "[data-fancybox]", {
			// Hash: false,
			...(this.fancyboxOptions || {}),
		});
	},
	unmounted() {
		Fancybox.unbind(this.$refs.container);
		Fancybox.close();
	},
};
</script>

<template>
	<div ref="container">
		<slot></slot>
	</div>
</template>
