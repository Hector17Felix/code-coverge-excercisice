const adder = require('../../services/adder');

describe("Test de suma", function(){
    let _numberA;
    let _numberB;

    it("Deberia devolver la suma entre numberA y numberB", function(){
        _numberA = 6;
        _numberB = 7;

        const result = adder.add(_numberA = 6, _numberB = 7);

        expect(result).toEqual(13);
    });
});