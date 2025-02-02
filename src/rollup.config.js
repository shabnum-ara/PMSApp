import copy from 'rollup-plugin-copy';

export default {
  input: 'src/Content.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    copy({
      targets: [
        { src: 'assets/**/*', dest: 'dist/assets' },
      ],
    }),
  ],
};