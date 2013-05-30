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
    //
    // проверка параметров
    //
    if (typeof message !== 'string') throw new Error('Сообщение должно иметь тип "string".');
    //
    // задание сообщения
    //
    this.message = message;
    //
    ////
    //
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.SwiftError = SwiftError;