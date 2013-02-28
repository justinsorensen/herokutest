var connect = require('connect');

connect.createServer(connect.static('public')).listen(process.env.PORT);

console.log('Listening on port ' + process.env.PORT);

