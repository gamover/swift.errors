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

function ErrorList (message)
{
    SwiftError.call(this, message);
    Error.captureStackTrace(this, arguments.callee);

    this.list = [];
}
$util.inherits(ErrorList, SwiftError);

/**
 * Задание списка ошибок
 *
 * @param {[Error]} list список ошибок
 *
 * @returns {ErrorList}
 */
ErrorList.prototype.setList = function setList (list)
{
    if (!$swiftUtils.type.isArray(list)) throw new Error('Список должен быть массивом.');

    for (var i = 0, n = list.length; i < n; i++)
        if (!(list[i] instanceof Error)) throw new Error('Ошибка list[' + i + '] должна быть типа "Error".');

    this.list = list;

    return this;
};

/**
 * Добавление ошибки в список ошибок
 *
 * @param {Error} error ошибка
 *
 * @returns {ErrorList}
 */
ErrorList.prototype.listPush = function listPush (error)
{
    if (!(error instanceof Error)) throw new Error('Ошибка должна быть типа "Error".');

    this.list.push(error);

    return this;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.ErrorList = ErrorList;