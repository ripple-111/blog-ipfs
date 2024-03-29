var app = require('../app.js');
var debug = require('debug')('demo:server');
var http = require('http');


var port = normalizePort('3000');
// app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app.callback());

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * 正常化一个端口（数字，字符串，false）
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * 监听错误事件
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // 处理错误
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
     //  process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
     //  process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * 监听端口
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

