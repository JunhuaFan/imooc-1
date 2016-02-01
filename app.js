//引用express module
var express = require('express');

//設定http port number
var port = process.env.PORT || 3000;

//取得express module
var app = express();

//設定view的存放路徑
app.set('views', './views');

//設定view的template engine為jade
app.set('view engine', 'jade');

//開始監聽端口
app.listen(port);

//印出log
console.log('imooc started on port ' + port);

//index page
app.get('/', function(req, res){
	res.render('index', {
		title: 'imooc 首頁'
	})
});

//detail page
app.get('/movie/:id', function(req, res){
	res.render('index', {
		title: 'imooc 詳情頁'
	})
});

//admin page
app.get('/admin/movie', function(req, res){
	res.render('index', {
		title: 'imooc 後台錄入頁'
	})
});

//list page
app.get('/admin/list', function(req, res){
	res.render('index', {
		title: 'imooc 列表頁'
	})
});