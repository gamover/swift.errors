/**
 * Created by G@mOBEP
 *
 * Email:   rusmiran@gmail.com
 * Company: RealWeb
 * Date:    23.05.13
 * Time:    13:06
 */

var $util = require('util'),
    $swiftUtils = require('swift.utils'),

    SwiftError = require('./swiftError').SwiftError;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MultipleError (message)
{
    SwiftError.call(this, message);
    Error.captureStackTrace(this, arguments.callee);

    this.name = 'MultipleError';
    this.list = [];
}
$util.inherits(MultipleError, SwiftError);

/**
 * Задание списка ошибок
 *
 * @param {[Error]} list список ошибок
 *
 * @returns {MultipleError}
 */
MultipleError.prototype.setList = function setList (list)
{
    if (!$swiftUtils.type.isArray(list))
    {
        throw new Error('не удалось задать список ошибок в MultipleError. Недопустимый тип списка ошибок');
    }
    for (var i = 0, n = list.length; i < n; i++)
    {
        if (!(list[i] instanceof Error))
        {
            throw new Error('не удалось задать список ошибок в MultipleError. Недопустимый тип ошибки list[' + i + ']');
        }
    }

    this.list = list;

    return this;
};

/**
 * Добавление ошибки в список ошибок
 *
 * @param {Error} error ошибка
 *
 * @returns {MultipleError}
 */
MultipleError.prototype.pushError = function pushError (error)
{
    if (!(error instanceof Error))
    {
        throw new Error('не удалось добавить ошибку в список ошибок MultipleError. Недопустимый тип ошибки');
    }

    this.list.push(error);

    return this;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.MultipleError = MultipleError;