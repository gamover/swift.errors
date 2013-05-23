/**
 * Created by G@mOBEP
 *
 * Email:   rusmiran@gmail.com
 * Company: RealWeb
 * Date:    23.05.13
 * Time:    13:19
 */

var $util = require('util'),

    SwiftError = require('./swiftError').SwiftError;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function TypeError (message)
{
    SwiftError.call(this, message);
    Error.captureStackTrace(this, arguments.callee);
}
$util.inherits(TypeError, SwiftError);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.TypeError = TypeError;