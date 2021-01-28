#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

process.chdir(
  path.resolve(__dirname)
);


let times = {
  oget: [],
  _get: []
};

let bench = (lib) => {
  for (let i = 1; i <= 1000; i++) {
    console.log(`[${lib}] ${i}...`);

    let res = String(
      execSync(`node ./${lib}.js`)
    )
    .split('\n');

    times[lib].push(
      parseInt(res[res.length - 2])
    );
  }
}

let print = (lib) => console.log(
  `[${lib}] average time:`,
  times[lib].reduce((a, b) => a + b, 0) / times[lib].length
);

bench('oget');
bench('_get');

print('oget');
print('_get');
