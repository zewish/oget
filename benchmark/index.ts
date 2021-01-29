import { execSync } from 'child_process';
import path from 'path';

process.chdir(
  path.resolve(__dirname)
);

interface Times {
  oget: number[];
  _get: number[];
}

const times: Times = {
  oget: [],
  _get: []
};

const bench = (lib: keyof Times) => {
  for (let i = 1; i <= 1000; i++) {
    console.log(`[${lib}] ${i}...`);

    const res = String(
      execSync(`node ./${lib}.js`)
    ).split('\n');

    times[lib].push(
      parseInt(res[res.length - 2], 10)
    );
  }
}

const print = (lib: keyof Times) => console.log(
  `[${lib}] average time:`,
  times[lib].reduce((a, b) => a + b, 0) / times[lib].length
);

bench('oget');
bench('_get');

print('oget');
print('_get');
