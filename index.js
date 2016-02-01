function APIError(status, code, message) {
	this.status = status;
	this.code = code;
	this.message = message;
}
APIError.prototype = Object.create(Error.prototype);

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
exports.NotFoundError = NotFoundError;
exports.AccessDeniedError = AccessDeniedError;
exports.NotAuthenticatedError = NoAuthError;
exports.DuplicateError = DuplicateError;
exports.InvalidStateError = InvalidStateError;
exports.EntityTooLarge = EntityTooLarge;
