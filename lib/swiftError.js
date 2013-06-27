/**
 * Created by G@mOBEP
 *
 * Email:   rusmiran@gmail.com
 * Company: RealWeb
 * Date:    23.05.13
 * Time:    12:35
 */

var $util = require('util');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SwiftError (message)
{
    Error.call(this);
    Error.captureStackTrace(this, arguments.callee);

    this.name    = 'SwiftError';
    this.message = message;
    this.info    = null;
    this.code    = null;
}
$util.inherits(SwiftError, Error);

/**
 * Задание сообщения
 *
 * @param {String} message сообщение
 *
 * @returns {SwiftError}
 */
SwiftError.prototype.setMessage = function setMessage (message)
{
    if (typeof message !== 'string')
    {
        throw new Error('не удалось добавить сообщение об ошибке в ' + this.name + '. Недопустимый тип сообщения');
    }

    this.message = message;

    return this;
};

/**
 * Задание дополнительной информации
 *
 * @param {*} info дополнительная информация
 *
 * @returns {SwiftError}
 */
SwiftError.prototype.setInfo = function setInfo (info)
{
    this.info = info;

    return this;
};

/**
 * Задание кода ошибки
 *
 * @param {*} code
 *
 * @returns {SwiftError}
 */
SwiftError.prototype.setCode = function setCode (code)
{
    this.code = code;

    return this;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.SwiftError = SwiftError;