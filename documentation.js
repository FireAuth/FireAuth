fs = require('fs');
fs.readFile('top.md', 'utf8', function(err, data1){
	fs.readFile('docs.md', 'utf8', function(err, data2){
		fs.writeFile('readme1.md', data1+data2, function(error){
			return console.log(error);

		})
	})
})