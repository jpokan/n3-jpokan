export const config = {
	Carousel: {
		Toolbar: {
			display: {
				left: [],
				right: ["close"],
			},
			items: {
				close: {
					tpl: '<button class="f-button is-close" title="{{CLOSE}}" data-fancybox-close><svg xmlns="http://www.w3.org/2000/svg" style="padding: 3px;" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6L6 18M6 6l12 12" /></svg></button>',
				},
			},
		},
		Arrows: {
			prevTpl:
				'<svg xmlns="http://www.w3.org/2000/svg" style="padding: 3px;" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6" /></svg>',
			nextTpl:
				'<svg xmlns="http://www.w3.org/2000/svg" style="padding: 3px;" viewBox="0 0 24 24"><path fill="none" stroke="currentColor stroke-linecap="round"	stroke-linejoin="round"	stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6" /></svg>',
		},
	},
	mainStyle: {
		"--f-toolbar-padding": "2em 2em",
		"--f-toolbar-gap": "1em",
		"--f-button-border-radius": "50%",
		// "--f-button-border": "rgb(63 63 70) 1px solid",
		"--f-thumb-width": "60px",
		"--f-thumb-height": "60px",
		"--f-thumb-opacity": "1",
		"--f-thumb-hover-opacity": "1",
		"--f-thumb-selected-opacity": "1",
		"--f-button-width": "2.5em",
		"--f-button-height": "2.5em",
		"--f-arrow-width": "2.5em",
		"--f-arrow-padding": "20px",
		"--f-arrow-height": "2.5em",
	},
};
