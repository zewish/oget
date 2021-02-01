## oget

fast { property: 'getter' }

#### How fast is it
Well, I didn't do any extensive testing on all available browsers, but since it uses only builtin functions it should be quite fast. According to <strong>[this little benchmark](https://github.com/zewish/oget/tree/master/benchmark)</strong> it is currently faster than lodash.get on the current LTS version of node.js.

#### What this is not
This will never be some kind of "wannabe" lodash killer library. It's just what you see - a simple object property getter.

#### Usage
```javascript
import oget from 'oget';

const obj = {
  uno: 1,
  due: {
    a: ['abracadabra'],
    b: [ [ [ 'horray' ] ] ]
  },
  tre: 3
};

oget(obj, 'due.a.0'); // abracadabra
oget(obj, '[due][a[0]]'); // abracadabra
oget(obj, 'due.a[0]'); // abracadabra

oget(obj, 'due.b[0][0][0]'); // horray
oget(obj, 'due.b.0.0.0'); // horray
oget(obj, 'due[b].0[0].0'); // horray

oget(obj, 'due.b.0.0[0].missing', 'default_value!'); // default_value!
```

#### Install
```bash
$ npm install --save oget
```

#### Test
```bash
$ npm install && npm test
```
