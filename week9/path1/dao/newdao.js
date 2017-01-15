
var mysql = require('mysql');
var $conf = require('../com/mysql');

var $sql = require('./newmap');

var pool = mysql.createPool($conf.mysql);

var jsonWrite = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};
 
module.exports = {
	add: function (req, res, next) {
		var param = req.query || req.params;
 		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数

			// 建立连接，向表中插入值
			// 'INSERT INTO newfrom(id , newtitle, newoption, newimg, newcontent, newtime) VALUES(0, ?, ?, ?, ?, ?)'
			connection.query($sql.insert, [param.newtitle, param.newoption, param.newimg, param.newcontent, param.newtime], function(err, result) {
				if(result) {
					result = {
						code: 200,
						msg:'增加成功'
					};
				}
 
				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result);
 
				// 释放连接 
				connection.release();
			});
		});
	},
	delete: function (req, res, next) {
		// delete by Id 'delete from newfrom where id = ?'
		pool.getConnection(function(err, connection) {
			var id = +req.query.id;
			connection.query($sql.delete, id, function(err, result) {
				if(result.affectedRows > 0) {
					result = {
						code: 200,
						msg:'删除成功'
					};
				} else {
					result = void 0;
				}
				jsonWrite(res, result);
				connection.release();
			});
		});
	},
	update: function (req, res, next) {
		//'update newfrom set newtitle = ?, newoption = ?, newimg = ?, newcontent = ?, newtime = ?, id = ?'
		var param = req.query || req.params;
		if(param.newtitle == null || param.newoption == null || param.newimg == null || param.newcontent == null || param.newtime == null || param.id == null) {
			jsonWrite(res, undefined);
			return;
		}
 
		pool.getConnection(function(err, connection) {
			connection.query($sql.update, [param.newtitle, param.newoption, param.newimg, param.newcontent, param.newtime, +param.id, +param.id], function(err, result) {
				
				if(result.affectedRows > 0) {
					res.render('users', {
						result: result
					}); 
				} else {
					res.render('fail',  {
						result: result
					});
				}
 
				connection.release();
			});
 
		});
	},
	queryAll: function (req, res, next) {

		pool.getConnection(function(err, connection) {
			connection.query($sql.queryAll, function(err, result) {
				jsonWrite(res, result);
				connection.release();
			});
		});
	}
};