var earth = {
    isRound: true,
    numberFromSun: 3
};

//   npm i --save @types/jasmine

describe('Earth', function () {
    //variable for beforeeach needs to be delcared in define scope
    var arr;
    //before each is executed before evry it
    beforeEach(function () {
        arr = [1, 3, 5];
    });
    it('Is round', function () {
        expect(earth.isRound).toBe(true);
    });
    it('Is the 3. planet from the sun', function () {
        expect(earth.numberFromSun).toBe(3);
    });
});
describe('Jasmine Matchers', function () {
    it('allows for === and deep equality', function () {
        expect(1 + 1).toBe(2);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
    });
    it('allows for easy precision checking', function () {
        expect(3.1415).toBeCloseTo(3.14, 2);
    });
    it('allows for easy truthy and falsy checking', function () {
        expect(0).toBeFalsy();
        expect([]).toBeTruthy();
    });
    it('allows for checking content of an object', function () {
        expect([1, 2, 3]).toContain(1);
        expect({
            name: 'Elie'
        }).toEqual(jasmine.objectContaining({
            name: 'Elie'
        }));
    });
    it('allows for easy type checking', function () {
        expect([]).toEqual(jasmine.any(Array));
        expect(function () {}).toEqual(jasmine.any(Function));
    });
});

function getUserInfo(username) {
    return $.getJSON('https://api.github.com/users/' + username);
}



describe('Async Function Test: getUserInfo', function () {
    it('returns the correct username', function (done) {
        getUserInfo('dbremen').then(function (data) {
            expect(data.name).toBe('Dirk');
            //Jasmine will be default wait 5 seconds
            //internal Jasmine funciton to know when the async call is done
            done();
        });
    });
});