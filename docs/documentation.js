fs = require('fs');
fs.readFile('top.md', 'utf8', function(err, data1){
	fs.readFile('docs.md', 'utf8', function(err, data2){
		fs.readFile('bottom.md', 'utf8', function(err, data3){
			fs.writeFile('../README.md', data1+data2+data3, function(error){
				if(error){
					return console.log(error);
				}

			})
		})
		
	})
})