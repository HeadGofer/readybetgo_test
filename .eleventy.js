module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
