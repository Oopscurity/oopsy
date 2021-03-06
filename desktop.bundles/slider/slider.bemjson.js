module.exports = {
	block : 'page',
	title : 'Slider',
	head : [
		{ elem : 'meta', attrs : { name : 'description', content : '' } },
		{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : 'slider.min.css' }
	],
	scripts: [
		{ elem : 'js', url : 'slider.min.js' }
	],
	content: [
		{
			block: 'content',
			content: [
				{
					block: 'slider',
					mods: { theme: 'demo' },
					js: {
						id: 'together',
						together: 2,
						wheel: 'page',
						paint: true,
						duration: 500,
						// slideshow: true,
						delay: 2500
					},
					content: [
						{},
						{},
						{},
						{},
						{}
					].map(function(item) { return item; })
				},
				{
					block: 'slider',
					js: { id: 'together'},
					mix: { block: 'remote' }
				},
				{
					block: 'slider',
					js: { id: 'together' },
					mix: { block: 'display', js: true }
				}
			]
		}
	]
};
