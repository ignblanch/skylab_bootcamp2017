describe('passwordValidation', function() {

    // beforeEach(function() {

    // });

    it('checks if the size is equal to config parameter', function() {        
        expect(passwordValidation('123456789A#')).toBeTruthy();
        expect(passwordValidation('1234A')).toBeFalsy();

    });

    it('checks if the number of uppercase letters is equal to config parameter', function() {
        expect(passwordValidation('1234567890A#')).toBeTruthy();
        expect(passwordValidation('1234567890a')).toBeFalsy();
    });

    it('checks if there are numbers in the pwd equal to config parameter', function() {

        expect(passwordValidation('1234567890A#')).toBeTruthy();
        expect(passwordValidation('Abcdefghadw$ndiwdw')).toBeFalsy();
    });

    it('checks for special characters provided in the config parameter', function() {
        expect(passwordValidation('123456789A#')).toBeTruthy();
        expect(passwordValidation('12345678Awskqws')).toBeFalsy();
    });

    it('accepts an alternative config file if passed', function () {
        var altConfig = {
            size: 5,
            uppercase: 2,
            numbers: 3,
            special: "#%&!"
        }
        expect(passwordValidation('123AF#', altConfig)).toBeTruthy();
        expect(passwordValidation('14A#', altConfig)).toBeFalsy();   
    });

});
