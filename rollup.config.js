import buble from 'rollup-plugin-buble';

export default {
    entry: 'src/oget.js'
    , format: 'umd'
    , moduleName: 'oget'
    , plugins: [ buble() ]
    , dest: 'oget.js'
};