const {apiErrors} = require('./errors')

class APIError {
    constructor(status, code, message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }
}

module.exports = {
    ...apiErrors.reduce((map, [name, status]) => {

        map[`Http${status}Error`] = map[`${name}Error`] = map[name] = class extends APIError {
            constructor(code, message) {
                super(status, code, message);
            }
        };
        return map;
    }, {}),
    APIError
};
