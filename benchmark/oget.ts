import microtime from 'microtime';
import oget from 'oget';

let obj = {
  uno: 1,
  due: {
    a: [ 'abracadabra' ],
    b: [ [ [ 'horray' ] ] ]
  },
  tre: 3,
  quattro: [
    {
      "_id": "573ff43c71fd669b100425d6",
      "index": 0,
      "guid": "5b7ef2d9-83b5-416d-93d5-61b5eecb0274",
      "isActive": true,
      "balance": "$2,531.76",
      "age": 38,
      "eyeColor": "green",
      "name": {
        "first": "Lela",
        "last": "Mueller"
      }
    }
  ],
  chinque: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  sei: [
    {
      "id": 0,
      "name": "Brock Wyatt"
    },
    {
      "id": 1,
      "name": "Montgomery Moon"
    },
    {
      "id": 2,
      "name": "Hancock Cox"
    }
  ]
};

let selectors = [
  'due.a.0',
  '[due][a[0]]',
  'due[a].0',
  'sei.1[name]',
  'sei.0[id]',
  'due.a[0]',
  'quattro[0]._id',
  'quattro.0[_id]',
  'quattro.0[index]',
  'quattro.0.index',
  'quattro.0[balance]',
  'quattro[0].balance',
  'due.b.0.0.0',
  'chinque[2]',
  'chinque.3',
  'quattro.0.guid',
  'quattro[0][guid]',
  'quattro.0.eyeColor',
  'quattro[0].name.last',
  'due.b[0][0][0]',
  'due[b].0[0].0',
  'quattro.0.name[last]',
  'quattro.0.name.first',
  'quattro[0].name[first]',
  'chinque[6]',
  'sei.2.name'
];

let start = microtime.now();

for (let j = 0; j < selectors.length; j++) {
  console.log(`${selectors[j]} ->`, oget(obj, selectors[j]));
}

console.log(microtime.now() - start);
