function passwordValidation(pwd, obj) {

    var config = obj ||{
        size: 10,
        uppercase: 1,
        numbers: 2,
        special: "$#%&-!?"
    }

    if (pwd.length < config.size) {
        return false }
    if (pwd.replace(/[^A-Z]/g, '').length < config.uppercase) {
        return false }
    if (pwd.replace(/[^0-9]/g, '').length < config.numbers) {
        return false }
    if (!(/[\$#%&\-!\?]/.test(pwd))) {
        return false }

    return true;

}
