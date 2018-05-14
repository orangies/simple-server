const fs = require('fs');
fs.watchFile('message.text', function(curr, prev){
	fs.readFile('message.text', 'utf8', function(err, data){
	  if (err) throw err;
	  console.log(data);
	});
});
