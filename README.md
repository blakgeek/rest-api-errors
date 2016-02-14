# Rest Api Errors for Nodejs

## What is this?
It's a set of errors that can be thrown to break a promise chain in a clean and logical way when creating APIs using NodeJS.
I created it because I like promises and I like rest and I like simple. 
It also keeps me from having to remember the right http status codes to return for various errors.

## How do I use it?

Here's an example of an endpoint to delete a Thang.

```Javascript
// delete a thang
app.delete('/thangs/:id', function (req, resp) {

    var username = req.user.username;
    var id = req.params.id;

    Thang.findOne({
        _id: id
    }).then(function (thang) {
        if (!thang) {
            // give em a 404 with custom error code and message
            throw new NotFound('thang_not_found', "I can't find that thang :(");
        } else if (thang.createdBy !== username) {
            
            // give em a generic 403
            throw new Forbidden();
        }
        // it's all good so actually delete the thang
        return Thang.deleteOne({
            _id: id
        });

    }).then(function () {

        resp.status(204).end();

    }).catch(ApiError, function (err) {

        // handle any ApiError with a simple elegant response
        resp.status(err.status).send({
            code: err.code,
            message: err.message
        });
    }).catch(function (err) {
        
        // handle all other errors in some kinda way
        handleError(resp, err);
    });
};
```

## What errors are supported?
 
All of following are implemented.  Throw them to your hearts content.
* **400** - BadRequest
* **401** - Unauthorized
* **402** - PaymentRequired
* **403** - Forbidden
* **404** - NotFound
* **405** - MethodNotAllowed
* **406** - NotAcceptable
* **407** - ProxyAuthenticationRequired
* **408** - RequestTimeout
* **409** - Conflict
* **410** - Gone
* **411** - LengthRequired
* **412** - PreconditionFailed
* **413** - RequestEntityTooLarge
* **414** - RequestUriTooLong
* **415** - UnsupportedMediaType
* **416** - RequestedRangeNotSatisfiable
* **417** - ExpectationFailed
* **418** - IAmATeapot
* **420** - EnhanceYourCalm
* **422** - UnprocessableEntity
* **423** - Locked
* **424** - FailedDependency
* **426** - UpgradeRequired
* **428** - PreconditionRequired
* **429** - TooManyRequests
* **431** - RequestHeaderFieldsTooLarge
* **444** - NoResponse
* **449** - RetryWith
* **450** - BlockedbyWindowsParentalControls
* **499** - ClientClosedRequest
* **500** - InternalServerError
* **501** - NotImplemented
* **502** - BadGateway
* **503** - ServiceUnavailable
* **504** - GatewayTimeout
* **505** - HTTPVersionNotSupported
* **506** - VariantAlsoNegotiates
* **507** - InsufficientStorage
* **508** - LoopDetected
* **509** - BandwidthLimitExceeded
* **510** - NotExtended
* **511** - NetworkAuthenticationRequired
* **598** - NetworkReadTimeout
* **599** - NetworkConnectTimeout
