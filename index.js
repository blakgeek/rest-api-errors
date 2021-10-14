class APIError {
    constructor(status, code, message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }
}

const apiErrors = Object.entries({
    BadRequest: 400,
    Unauthorized: 401,
    NotAuthorized: 401,
    NoAuth: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    AccessDenied: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Duplicate: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    RequestEntityTooLarge: 413,
    EntityTooLarge: 413,
    RequestURITooLong: 414,
    UnsupportedMediaType: 415,
    RequestedRangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    IAmATeapot: 418,
    EnhanceYourCalm: 420,
    UnprocessableEntity: 422,
    InvalidState: 422,
    Locked: 423,
    FailedDependency: 424,
    ReservedForWebDAV: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    NoResponse: 444,
    RetryWith: 449,
    BlockedByWindowsParentalControls: 450,
    ClientClosedRequest: 499,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    BandwidthLimitExceeded: 509,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    NetworkReadTimeout: 598,
    NetworkConnectionTimeout: 599,
}).reduce((map, [name, status]) => {

    map[`${name}Error`] = map[name] = class extends APIError {
        constructor(code, message) {
            super(status, code, message);
        }
    };
    return map;
}, {});

module.exports = {
    ...apiErrors,
    APIError
};
