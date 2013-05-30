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

function SystemError (message)
{
    SwiftError.call(this, message);
    Error.captureStackTrace(this, arguments.callee);

    this.name = 'SystemError';
}
$util.inherits(SystemError, SwiftError);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.SystemError = SystemError;