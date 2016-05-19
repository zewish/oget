## oget

fast { property: 'getter' }

#### Usage

```javascript
'use strict';

let oget = require('oget');

let obj = {
    uno: 1
    , due: {
        a: ['abracadabra']
        , b: [ [ [ 'horray' ] ] ]
    }
    , tre: 3
};

oget(obj, 'due.a.0'); // abracadabra
oget(obj, '[due][a[0]]'); // abracadabra
oget(obj, 'due.a[0]'); // abracadabra

oget(obj, 'due.b[0][0][0]'); // horray
oget(obj, 'due.b.0.0.0'); // horray
oget(obj, 'due[b].0[0].0'); // horray

oget(obj, 'due.b.0.0[0].missing', 'default_value!'); // default_value!
```

#### Install (NPM)
```bash
$ npm install --save oget
```

#### Install (Bower)
```bash
$ npm install --save oget
```

#### Test
```bash
$ npm install && npm test
```