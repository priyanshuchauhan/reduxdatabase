var fs = require('fs');
var http = require('http');
import store from './src/redux-init';

http.createServer(function (req, res) {
  fs.readFile('src/demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
