
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['gfc1LZrKCQiNsDFEJ7YhdR'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  