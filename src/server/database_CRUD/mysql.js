/**
 * @description mysql crud ** 对外接口返回Promise函数形式
 */
'use strict';

var execQuery = require('./exec_query_mysql');
//根据id查询文章
exports.getById = function(tableName, id){
	console.log(tableName, id);
    return new Promise(function(resolve, reject){
        var values = {id:id};
        var sql = 'select * from ? where ?';
        execQuery(sql,[tablename, values], function(err, rows){
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        });
    });
};