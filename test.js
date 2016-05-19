'use strict';

let expect = require('chai').expect
    , oget = require('./oget.js');

describe('oget.js', () => {
    let obj = {
        uno: 1
        , due: {
            a: [ 'abracadabra' ]
            , b: [ [ [ 'horray' ] ] ]
        }
        , tre: 3
    };

    it('returns property when using dot notation selector', () => {
        expect(
            oget(obj, 'due.a.0')
        )
        .to.equal(
            obj.due.a[0]
        );
    });

    it('returns property when using array notation selector', () => {
        expect(
            oget(obj, '[due][a[0]]')
        )
        .to.equal(
            obj.due.a[0]
        );
    });

    it('returns property when using mixed notation selector', () => {
        expect(
            oget(obj, 'due[a].0')
        )
        .to.equal(
            obj.due.a[0]
        );

        expect(
            oget(obj, 'due.a[0]')
        )
        .to.equal(
            obj.due.a[0]
        );
    });

    it('returns deep property when using dot notation selector', () => {
        expect(
            oget(obj, 'due.b.0.0.0')
        )
        .to.equal(
            obj.due.b[0][0][0]
        );
    });

    it('returns deep property when using array notation selector', () => {
        expect(
            oget(obj, 'due.b[0][0][0]')
        )
        .to.equal(
            obj.due.b[0][0][0]
        );
    });

    it('returns deep property when using mixed notation selector', () => {
        expect(
            oget(obj, 'due[b].0[0].0')
        )
        .to.equal(
            obj.due.b[0][0][0]
        );
    });

    it('returns default value if property not found', () => {
        expect(
            oget(obj, 'due.b.0.0[0].missing', 'default_value!')
        )
        .to.equal(
            'default_value!'
        );
    });
});