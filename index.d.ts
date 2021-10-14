declare module "rest-api-errors" {
    export class APIError extends Error {
        public status: number;
        public code: string;
        public message: string;
        constructor(status: number, code?: string, message?: string);
    }

    export class BadRequestError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class UnauthorizedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class NotAuthorizedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class NoAuthError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class PaymentRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class ForbiddenError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class AccessDeniedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class NotFoundError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class MethodNotAllowedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class NotAcceptableError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class ProxyAuthenticationRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class RequestTimeoutError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class ConflictError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class DuplicateError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class GoneError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class LengthRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class PreconditionFailedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class RequestEntityTooLargeError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class EntityTooLargeError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class RequestURITooLongError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class UnsupportedMediaTypeError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class RequestedRangeNotSatisfiableError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class ExpectationFailedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class IAmATeapotError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class EnhanceYourCalmError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class UnprocessableEntityError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class InvalidStateError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class LockedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class FailedDependencyError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class ReservedForWebDAVError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class UpgradeRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class PreconditionRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class TooManyRequestsError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class RequestHeaderFieldsTooLargeError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class NoResponseError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class RetryWithError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class BlockedByWindowsParentalControlsError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class ClientClosedRequestError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class InternalServerErrorError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class NotImplementedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class BadGatewayError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class ServiceUnavailableError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class GatewayTimeoutError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class HttpVersionNotSupportedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class VariantAlsoNegotiatesError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class InsufficientStorageError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class LoopDetectedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class BandwidthLimitExceededError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class NotExtendedError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class NetworkAuthenticationRequiredError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class NetworkReadTimeoutError extends APIError {
        constructor(code?: string, message?: string);
    }

    export class NetworkConnectionTimeoutError extends APIError {
        constructor(code?: string, message?: string);
    }

}
