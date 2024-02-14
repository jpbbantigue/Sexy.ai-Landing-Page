module.exports = function (eleventyConfig) {
	const directories = {
		dir: {
			input: "src",
			output: "dist",
			data: "_data",
			layouts: "_layouts",
			includes: "_includes",
		},
	};

	eleventyConfig.addFilter("fileName", (filePath) => {
		return filePath
			.replace(/^.*[\\\/]/, "")
			.split(".")
			.slice(0, -1)
			.join(".");
	});

	// Copy these static files to _site folder
	eleventyConfig.addPassthroughCopy({
		"src/assets": "assets",
		"src/assets/robots.txt": "robots.txt",
	});

	return directories;
};
