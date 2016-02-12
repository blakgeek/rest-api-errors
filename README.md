# Rest Api Error for Nodejs

I created this because I like promises and I like rest.  It makes error handling in promise chains simple and clean.
It also means you don't need to remember the right http status codes to return for various errors.

## How do I use it?

Here's how you'd use it to make sure some can delete a thang.

```
// delete a thang
app.delete('/thangs/:id', function (req, resp) {

    var username = req.user.username;
    var id = req.params.id;

    Thang.findOne({
        _id: id
    }).then(function (thang) {
        if (!thang) {
            // give em a 404
            throw new NotFoundError('thang_not_found');
        } else if (thang.createdBy !== username) {
            
            // give em a 403
            throw new AccessDeniedError();
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

## TODO
Add the following errors
* 4xx Client Error
* 400 Bad Requestd
* 402 Payment Required
* 405 Method Not Allowed
* 406 Not Acceptable
* 407 Proxy Authentication Required
* 408 Request Timeout
* 410 Gone
* 411 Length Required
* 412 Precondition Failed
* 414 Request-URI Too Long
* 415 Unsupported Media Type
* 416 Requested Range Not Satisfiable
* 417 Expectation Failed
* 418 I'm a teapot (RFC 2324)
* 420 Enhance Your Calm (Twitter)
* 423 Locked (WebDAV)
* 424 Failed Dependency (WebDAV)
* 425 Reserved for WebDAV
* 426 Upgrade Required
* 428 Precondition Required
* 429 Too Many Requests
* 431 Request Header Fields Too Large
* 444 No Response (Nginx)
* 449 Retry With (Microsoft)
* 450 Blocked by Windows Parental Controls (Microsoft)
* 499 Client Closed Request (Nginx)
* 5xx Server Error
* 500 Internal Server Error
* 501 Not Implemented
* 502 Bad Gateway
* 503 Service Unavailable
* 504 Gateway Timeout
* 505 HTTP Version Not Supported
* 506 Variant Also Negotiates (Experimental)
* 507 Insufficient Storage (WebDAV)
* 508 Loop Detected (WebDAV)
* 509 Bandwidth Limit Exceeded (Apache)
* 510 Not Extended
* 511 Network Authentication Required
* 598 Network read timeout error
* 599 Network connect timeout error
