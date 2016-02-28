function APIError(status, code, message) {
    this.status = status;
    this.code = code;
    this.message = message;
}
APIError.prototype = Object.create(Error.prototype);

function BadRequest(code, message) {
    APIError.call(this, 400, code, message);
}
BadRequest.prototype = Object.create(APIError.prototype);

function Unauthorized(code, message) {
    APIError.call(this, 401, code, message);
}
Unauthorized.prototype = Object.create(APIError.prototype);


function PaymentRequired(code, message) {
    APIError.call(this, 402, code, message);
}
PaymentRequired.prototype = Object.create(APIError.prototype);


function Forbidden(code, message) {
    APIError.call(this, 403, code, message);
}
Forbidden.prototype = Object.create(APIError.prototype);


function NotFound(code, message) {
    APIError.call(this, 404, code, message);
}
NotFound.prototype = Object.create(APIError.prototype);


function MethodNotAllowed(code, message) {
    APIError.call(this, 405, code, message);
}
MethodNotAllowed.prototype = Object.create(APIError.prototype);


function NotAcceptable(code, message) {
    APIError.call(this, 406, code, message);
}
NotAcceptable.prototype = Object.create(APIError.prototype);


function ProxyAuthenticationRequired(code, message) {
    APIError.call(this, 407, code, message);
}
ProxyAuthenticationRequired.prototype = Object.create(APIError.prototype);


function RequestTimeout(code, message) {
    APIError.call(this, 408, code, message);
}
RequestTimeout.prototype = Object.create(APIError.prototype);


function Conflict(code, message) {
    APIError.call(this, 409, code, message);
}
Conflict.prototype = Object.create(APIError.prototype);


function Gone(code, message) {
    APIError.call(this, 410, code, message);
}
Gone.prototype = Object.create(APIError.prototype);


function LengthRequired(code, message) {
    APIError.call(this, 411, code, message);
}
LengthRequired.prototype = Object.create(APIError.prototype);


function PreconditionFailed(code, message) {
    APIError.call(this, 412, code, message);
}
PreconditionFailed.prototype = Object.create(APIError.prototype);


function RequestEntityTooLarge(code, message) {
    APIError.call(this, 413, code, message);
}
RequestEntityTooLarge.prototype = Object.create(APIError.prototype);


function RequestURITooLong(code, message) {
    APIError.call(this, 414, code, message);
}
RequestURITooLong.prototype = Object.create(APIError.prototype);


function UnsupportedMediaType(code, message) {
    APIError.call(this, 415, code, message);
}
UnsupportedMediaType.prototype = Object.create(APIError.prototype);


function RequestedRangeNotSatisfiable(code, message) {
    APIError.call(this, 416, code, message);
}
RequestedRangeNotSatisfiable.prototype = Object.create(APIError.prototype);


function ExpectationFailed(code, message) {
    APIError.call(this, 417, code, message);
}
ExpectationFailed.prototype = Object.create(APIError.prototype);


function IAmATeapot(code, message) {
    APIError.call(this, 418, code, message);
}
IAmATeapot.prototype = Object.create(APIError.prototype);


function EnhanceYourCalm(code, message) {
    APIError.call(this, 420, code, message);
}
EnhanceYourCalm.prototype = Object.create(APIError.prototype);


function UnprocessableEntity(code, message) {
    APIError.call(this, 422, code, message);
}
UnprocessableEntity.prototype = Object.create(APIError.prototype);


function Locked(code, message) {
    APIError.call(this, 423, code, message);
}
Locked.prototype = Object.create(APIError.prototype);


function FailedDependency(code, message) {
    APIError.call(this, 424, code, message);
}
FailedDependency.prototype = Object.create(APIError.prototype);


function ReservedforWebDAV(code, message) {
    APIError.call(this, 425, code, message);
}
ReservedforWebDAV.prototype = Object.create(APIError.prototype);


function UpgradeRequired(code, message) {
    APIError.call(this, 426, code, message);
}
UpgradeRequired.prototype = Object.create(APIError.prototype);


function PreconditionRequired(code, message) {
    APIError.call(this, 428, code, message);
}
PreconditionRequired.prototype = Object.create(APIError.prototype);


function TooManyRequests(code, message) {
    APIError.call(this, 429, code, message);
}
TooManyRequests.prototype = Object.create(APIError.prototype);


function RequestHeaderFieldsTooLarge(code, message) {
    APIError.call(this, 431, code, message);
}
RequestHeaderFieldsTooLarge.prototype = Object.create(APIError.prototype);


function NoResponse(code, message) {
    APIError.call(this, 444, code, message);
}
NoResponse.prototype = Object.create(APIError.prototype);


function RetryWith(code, message) {
    APIError.call(this, 449, code, message);
}
RetryWith.prototype = Object.create(APIError.prototype);


function BlockedbyWindowsParentalControls(code, message) {
    APIError.call(this, 450, code, message);
}
BlockedbyWindowsParentalControls.prototype = Object.create(APIError.prototype);


function ClientClosedRequest(code, message) {
    APIError.call(this, 499, code, message);
}
ClientClosedRequest.prototype = Object.create(APIError.prototype);


function InternalServerError(code, message) {
    APIError.call(this, 500, code, message);
}
InternalServerError.prototype = Object.create(APIError.prototype);


function NotImplemented(code, message) {
    APIError.call(this, 501, code, message);
}
NotImplemented.prototype = Object.create(APIError.prototype);


function BadGateway(code, message) {
    APIError.call(this, 502, code, message);
}
BadGateway.prototype = Object.create(APIError.prototype);


function ServiceUnavailable(code, message) {
    APIError.call(this, 503, code, message);
}
ServiceUnavailable.prototype = Object.create(APIError.prototype);


function GatewayTimeout(code, message) {
    APIError.call(this, 504, code, message);
}
GatewayTimeout.prototype = Object.create(APIError.prototype);


function HttpVersionNotSupported(code, message) {
    APIError.call(this, 505, code, message);
}
HttpVersionNotSupported.prototype = Object.create(APIError.prototype);


function VariantAlsoNegotiates(code, message) {
    APIError.call(this, 506, code, message);
}
VariantAlsoNegotiates.prototype = Object.create(APIError.prototype);


function InsufficientStorage(code, message) {
    APIError.call(this, 507, code, message);
}
InsufficientStorage.prototype = Object.create(APIError.prototype);


function LoopDetected(code, message) {
    APIError.call(this, 508, code, message);
}
LoopDetected.prototype = Object.create(APIError.prototype);


function BandwidthLimitExceeded(code, message) {
    APIError.call(this, 509, code, message);
}
BandwidthLimitExceeded.prototype = Object.create(APIError.prototype);


function NotExtended(code, message) {
    APIError.call(this, 510, code, message);
}
NotExtended.prototype = Object.create(APIError.prototype);


function NetworkAuthenticationRequired(code, message) {
    APIError.call(this, 511, code, message);
}
NetworkAuthenticationRequired.prototype = Object.create(APIError.prototype);


function NetworkReadTimeout(code, message) {
    APIError.call(this, 598, code, message);
}
NetworkReadTimeout.prototype = Object.create(APIError.prototype);


function NetworkConnectionTimeout(code, message) {
    APIError.call(this, 599, code, message);
}
NetworkConnectionTimeout.prototype = Object.create(APIError.prototype);

// older format these will be removed eventually
function NotFoundError(code, message) {
    APIError.call(this, 404, code, message);
}
NotFoundError.prototype = Object.create(APIError.prototype);

function AccessDeniedError(code, message) {
    APIError.call(this, 403, code, message);
}
AccessDeniedError.prototype = Object.create(APIError.prototype);

function NoAuthError(code, message) {
    APIError.call(this, 401, code, message);
}
NoAuthError.prototype = Object.create(APIError.prototype);

function DuplicateError(code, message) {
    APIError.call(this, 409, code, message);
}
DuplicateError.prototype = Object.create(APIError.prototype);

function InvalidStateError(code, message) {
    APIError.call(this, 422, code, message);
}
InvalidStateError.prototype = Object.create(APIError.prototype);

function EntityTooLarge(code, message) {
    APIError.call(this, 413, code, message);
}
EntityTooLarge.prototype = Object.create(APIError.prototype);

exports.APIError = APIError;
exports.BadRequest = BadRequest;
exports.Unauthorized = Unauthorized;
exports.PaymentRequired = PaymentRequired;
exports.Forbidden = Forbidden;
exports.NotFound = NotFound;
exports.MethodNotAllowed = MethodNotAllowed;
exports.NotAcceptable = NotAcceptable;
exports.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
exports.RequestTimeout = RequestTimeout;
exports.Conflict = Conflict;
exports.Gone = Gone;
exports.LengthRequired = LengthRequired;
exports.PreconditionFailed = PreconditionFailed;
exports.RequestEntityTooLarge = RequestEntityTooLarge;
exports.RequestURITooLong = RequestURITooLong;
exports.UnsupportedMediaType = UnsupportedMediaType;
exports.RequestedRangeNotSatisfiable = RequestedRangeNotSatisfiable;
exports.ExpectationFailed = ExpectationFailed;
exports.IAmATeapot = IAmATeapot;
exports.EnhanceYourCalm = EnhanceYourCalm;
exports.UnprocessableEntity = UnprocessableEntity;
exports.Locked = Locked;
exports.FailedDependency = FailedDependency;
exports.ReservedforWebDAV = ReservedforWebDAV;
exports.UpgradeRequired = UpgradeRequired;
exports.PreconditionRequired = PreconditionRequired;
exports.TooManyRequests = TooManyRequests;
exports.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge;
exports.NoResponse = NoResponse;
exports.RetryWith = RetryWith;
exports.BlockedbyWindowsParentalControls = BlockedbyWindowsParentalControls;
exports.ClientClosedRequest = ClientClosedRequest;
exports.InternalServerError = InternalServerError;
exports.NotImplemented = NotImplemented;
exports.BadGateway = BadGateway;
exports.ServiceUnavailable = ServiceUnavailable;
exports.GatewayTimeout = GatewayTimeout;
exports.HttpVersionNotSupported = HttpVersionNotSupported;
exports.VariantAlsoNegotiates = VariantAlsoNegotiates;
exports.InsufficientStorage = InsufficientStorage;
exports.LoopDetected = LoopDetected;
exports.BandwidthLimitExceeded = BandwidthLimitExceeded;
exports.NotExtended = NotExtended;
exports.NetworkAuthenticationRequired = NetworkAuthenticationRequired;
exports.NetworkReadTimeout = NetworkReadTimeout;
exports.NetworkConnectionTimeout = NetworkConnectionTimeout;
// older format these will be removed eventually
exports.NotFoundError = NotFoundError;
exports.AccessDeniedError = AccessDeniedError;
exports.NoAuthError = NoAuthError;
exports.DuplicateError = DuplicateError;
exports.InvalidStateError = InvalidStateError;
exports.EntityTooLarge = EntityTooLarge;
