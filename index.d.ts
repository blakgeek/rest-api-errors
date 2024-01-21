declare module "rest-api-errors" {
    export class APIError extends Error {
        public status: number;
        public code: string;
        public message: string;
        constructor(status: number, code?: string, message?: string);
    }
    
    /**
    * http 400 error
    */
    export class BadRequest extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 400 error
    */
    export class BadRequestError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 400 error
    */
    export class Http400Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 401 error
    */
    export class Http401Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 401 error
    */
    export class NoAuth extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 401 error
    */
    export class NoAuthError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 401 error
    */
    export class NotAuthorized extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 401 error
    */
    export class NotAuthorizedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 401 error
    */
    export class Unauthorized extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 401 error
    */
    export class UnauthorizedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 402 error
    */
    export class Http402Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 402 error
    */
    export class PaymentRequired extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 402 error
    */
    export class PaymentRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 403 error
    */
    export class AccessDenied extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 403 error
    */
    export class AccessDeniedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 403 error
    */
    export class Forbidden extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 403 error
    */
    export class ForbiddenError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 403 error
    */
    export class Http403Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 404 error
    */
    export class Http404Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 404 error
    */
    export class NotFound extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 404 error
    */
    export class NotFoundError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 405 error
    */
    export class Http405Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 405 error
    */
    export class MethodNotAllowed extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 405 error
    */
    export class MethodNotAllowedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 406 error
    */
    export class Http406Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 406 error
    */
    export class NotAcceptable extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 406 error
    */
    export class NotAcceptableError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 407 error
    */
    export class Http407Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 407 error
    */
    export class ProxyAuthenticationRequired extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 407 error
    */
    export class ProxyAuthenticationRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 408 error
    */
    export class Http408Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 408 error
    */
    export class RequestTimeout extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 408 error
    */
    export class RequestTimeoutError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 409 error
    */
    export class Conflict extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 409 error
    */
    export class ConflictError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 409 error
    */
    export class Duplicate extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 409 error
    */
    export class DuplicateError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 409 error
    */
    export class Http409Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 410 error
    */
    export class Gone extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 410 error
    */
    export class GoneError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 410 error
    */
    export class Http410Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 411 error
    */
    export class Http411Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 411 error
    */
    export class LengthRequired extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 411 error
    */
    export class LengthRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 412 error
    */
    export class Http412Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 412 error
    */
    export class PreconditionFailed extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 412 error
    */
    export class PreconditionFailedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 413 error
    */
    export class EntityTooLarge extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 413 error
    */
    export class EntityTooLargeError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 413 error
    */
    export class Http413Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 413 error
    */
    export class RequestEntityTooLarge extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 413 error
    */
    export class RequestEntityTooLargeError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 414 error
    */
    export class Http414Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 414 error
    */
    export class RequestURITooLong extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 414 error
    */
    export class RequestURITooLongError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 415 error
    */
    export class Http415Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 415 error
    */
    export class UnsupportedMediaType extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 415 error
    */
    export class UnsupportedMediaTypeError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 416 error
    */
    export class Http416Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 416 error
    */
    export class RequestedRangeNotSatisfiable extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 416 error
    */
    export class RequestedRangeNotSatisfiableError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 417 error
    */
    export class ExpectationFailed extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 417 error
    */
    export class ExpectationFailedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 417 error
    */
    export class Http417Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 418 error
    */
    export class Http418Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 418 error
    */
    export class IAmATeapot extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 418 error
    */
    export class IAmATeapotError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 420 error
    */
    export class EnhanceYourCalm extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 420 error
    */
    export class EnhanceYourCalmError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 420 error
    */
    export class Http420Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 422 error
    */
    export class Http422Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 422 error
    */
    export class InvalidState extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 422 error
    */
    export class InvalidStateError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 422 error
    */
    export class UnprocessableEntity extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 422 error
    */
    export class UnprocessableEntityError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 423 error
    */
    export class Http423Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 423 error
    */
    export class Locked extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 423 error
    */
    export class LockedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 424 error
    */
    export class FailedDependency extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 424 error
    */
    export class FailedDependencyError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 424 error
    */
    export class Http424Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 425 error
    */
    export class Http425Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 425 error
    */
    export class ReservedForWebDAV extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 425 error
    */
    export class ReservedForWebDAVError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 426 error
    */
    export class Http426Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 426 error
    */
    export class UpgradeRequired extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 426 error
    */
    export class UpgradeRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 428 error
    */
    export class Http428Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 428 error
    */
    export class PreconditionRequired extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 428 error
    */
    export class PreconditionRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 429 error
    */
    export class Http429Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 429 error
    */
    export class TooManyRequests extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 429 error
    */
    export class TooManyRequestsError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 431 error
    */
    export class Http431Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 431 error
    */
    export class RequestHeaderFieldsTooLarge extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 431 error
    */
    export class RequestHeaderFieldsTooLargeError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 444 error
    */
    export class Http444Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 444 error
    */
    export class NoResponse extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 444 error
    */
    export class NoResponseError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 449 error
    */
    export class Http449Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 449 error
    */
    export class RetryWith extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 449 error
    */
    export class RetryWithError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 450 error
    */
    export class BlockedByWindowsParentalControls extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 450 error
    */
    export class BlockedByWindowsParentalControlsError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 450 error
    */
    export class Http450Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 499 error
    */
    export class ClientClosedRequest extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 499 error
    */
    export class ClientClosedRequestError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 499 error
    */
    export class Http499Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 500 error
    */
    export class Http500Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 500 error
    */
    export class InternalServerError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 500 error
    */
    export class InternalServerErrorError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 501 error
    */
    export class Http501Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 501 error
    */
    export class NotImplemented extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 501 error
    */
    export class NotImplementedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 502 error
    */
    export class BadGateway extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 502 error
    */
    export class BadGatewayError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 502 error
    */
    export class Http502Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 503 error
    */
    export class Http503Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 503 error
    */
    export class ServiceUnavailable extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 503 error
    */
    export class ServiceUnavailableError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 504 error
    */
    export class GatewayTimeout extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 504 error
    */
    export class GatewayTimeoutError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 504 error
    */
    export class Http504Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 505 error
    */
    export class Http505Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 505 error
    */
    export class HttpVersionNotSupported extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 505 error
    */
    export class HttpVersionNotSupportedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 506 error
    */
    export class Http506Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 506 error
    */
    export class VariantAlsoNegotiates extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 506 error
    */
    export class VariantAlsoNegotiatesError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 507 error
    */
    export class Http507Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 507 error
    */
    export class InsufficientStorage extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 507 error
    */
    export class InsufficientStorageError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 508 error
    */
    export class Http508Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 508 error
    */
    export class LoopDetected extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 508 error
    */
    export class LoopDetectedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 509 error
    */
    export class BandwidthLimitExceeded extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 509 error
    */
    export class BandwidthLimitExceededError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 509 error
    */
    export class Http509Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 510 error
    */
    export class Http510Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 510 error
    */
    export class NotExtended extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 510 error
    */
    export class NotExtendedError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 511 error
    */
    export class Http511Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 511 error
    */
    export class NetworkAuthenticationRequired extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 511 error
    */
    export class NetworkAuthenticationRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 598 error
    */
    export class Http598Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 598 error
    */
    export class NetworkReadTimeout extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 598 error
    */
    export class NetworkReadTimeoutError extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 599 error
    */
    export class Http599Error extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 599 error
    */
    export class NetworkConnectionTimeout extends APIError {
        constructor(code?: string, message?: string);
    }

    /**
    * http 599 error
    */
    export class NetworkConnectionTimeoutError extends APIError {
        constructor(code?: string, message?: string);
    }
}