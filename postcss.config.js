const tailwinscss = require("tailwindcss");

module.exports = {
  plugins: [tailwinscss("./tailwind.js"), require("autoprefixer")],
};
