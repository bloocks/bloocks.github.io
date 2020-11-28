module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'layers',
    content: [`_site/**/*.html`],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
