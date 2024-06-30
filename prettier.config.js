/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const styleguide = require("@vercel/style-guide/prettier");

module.exports = {
	...styleguide,
	plugins: [...styleguide.plugins, "prettier-plugin-tailwindcss"],
};
