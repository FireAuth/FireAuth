fs = require('fs');
fs.readFile('docs/top.md', 'utf8', function(err1, data1){
	fs.readFile('docs/docs.md', 'utf8', function(err2, data2){
		fs.readFile('docs/bottom.md', 'utf8', function(err3, data3){
			fs.writeFile('README.md', data1+data2+data3, function(error){
				if(error){
					console.log("an error")
					return console.log(error);

				}
				if(err1){
					console.log("an error")
					//return console.log(err1);
				}
				if(err2){
					console.log("an error")
					//return console.log(err2);
				}
				if(err3){
					console.log("an error")
					//return console.log(err3);
				}

			})
		})
		
	})
})