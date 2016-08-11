/**
 * @description mysql crud
 */
'use strict';

var path = require('path'),
	mysql = require('mysql'),
	config = require('../config/database/mysql'),
	pool = mysql.createPool({
	connectionLimit: config.connectionLimit,
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});

function execQuery(sql, values, callback){
	var errorInfo;
	pool.getConnection(function (err, connection) {
		if(err){
			errorInfo = 'DB-数据库获取链接异常';
			throw errorInfo;
		}else{
			var querys = connection.query(sql, values, function (err, rows) {
				release(connection);
				if(err){
					errorInfo = 'DB-SQL语句执行错误' + err;
					callback(errorInfo);
				}else{
					callback(null, rows);
				}
			});
		}
	});
}
function release(connection){
	try {
		conneciton.release(function (error) {
			if(error){
				console.log('DB_关闭数据库链接异常!');
			}
		});
	} catch(e) {
		console.log('DB_执行关闭数据库链接异常！');
	}
}
//对外接口返回Promise函数形式
/*exports.getById = function(tableName, id){
    return new Promise(function(resolve, reject){
        var values = {id:id};
        var sql = 'select * from ? where ?';
        execQuery(sql,[tablename, values], function(err, rows){
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        })
    });
};*/
module.exports = execQuery;