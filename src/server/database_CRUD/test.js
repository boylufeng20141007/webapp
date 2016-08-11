/**
 * @description 测试db
 */
 var dao = require('./mysql');
 var rows = yield dao.getById('test', 1);