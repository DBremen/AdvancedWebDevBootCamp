var Map = require('../app/map');
describe('Advanced Array Methods', function () {
    describe('Map functions', function () {
        describe('DoubleValue', function () {
            it('It takes an array and returns an array where each element is doubled', () => {
                expect(Map.doubleValues([1, 2, 3])).toEqual([2, 4, 6]);
            });
        });
        describe('valTimesIndex', function () {
            it('It takes an array and returns the product of index and value for each element', () => {
                expect(Map.valTimesIndex([1, 2, 3])).toEqual([0, 2, 6]);
            });
        });
        describe('extractKey', function () {
            it('It takes an array of objects and a key and extracts the key for each element in the object array', () => {
                expect(Map.extractKey([{
                    name: 'Elie'
                }, {
                    name: 'Tim'
                }, {
                    name: 'Matt'
                }, {
                    name: 'Colt'
                }], 'name')).toEqual(['Elie', 'Tim', 'Matt', 'Colt']);
            });
        });
        describe('extractFullName', function () {
            it('It takes an array of objects with first and last properties and outputs an array of Fullname strings', () => {
                expect(Map.extractFullName([{
                    first: 'Elie',
                    last: "Schoppik"
                }, {
                    first: 'Tim',
                    last: "Garcia"
                }, {
                    first: 'Matt',
                    last: "Lane"
                }, {
                    first: 'Colt',
                    last: "Steele"
                }])).toEqual(['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']);
            });
        });
        describe('valTimesIndex', function () {
            it('It takes an array and returns the product of index and value for each element', () => {
                expect(Map.valTimesIndex([1, 2, 3])).toEqual([0, 2, 6]);
            });
        });
    });
});