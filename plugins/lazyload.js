// plugins/lazyload.js
export default defineNuxtPlugin(nuxtApp => {
	const lazyLoad = {
		mounted(el, binding) {
			// Set the initial placeholder image
			el.src = binding.value.placeholder || '';

			const loadImage = () => {
				// Set the image source to the actual URL once it's in the viewport
				el.src = binding.value.src;
				console.log('loaded');
			};

			const observer = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						loadImage();
						observer.unobserve(el); // Unobserve after the image is loaded
					}
				});
			}, {
				rootMargin: '100px', // Load the image before it's fully in view
			});

			observer.observe(el);
		},
	};

	// Register the lazyLoad directive globally
	nuxtApp.vueApp.directive('lazy', lazyLoad);
});

