import ts from '@wessberg/rollup-plugin-ts';

export default {
  input: './src/oget.ts',
  output: {
    name: 'oget',
    exports: 'default',
    strict: false
  },
  plugins: [
    ts({
      hook: {
        outputPath(path, kind) {
          if (kind === 'declaration') {
            return `${__dirname}/oget.d.ts`;
          }

          return path;
        }
      }
    })
  ]
};
