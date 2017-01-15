
var news = {
	insert: 'INSERT INTO newfrom(id , newtitle, newoption, newimg, newcontent, newtime) VALUES(0, ?, ?, ?, ?, ?)',
	update: 'update newfrom set newtitle = ?, newoption = ?, newimg = ?, newcontent = ?, newtime = ?, id = ? where id = ?',
	delete: 'delete from newfrom where id = ?',
	queryAll: 'select * from newfrom'
}

module.exports = news;
