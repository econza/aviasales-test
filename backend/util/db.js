var redis = require('redis');
var client = redis.createClient(process.env.REDIS_URL);

client.on('connect', function() {
    console.log('[REDIS] Redis Database connected'+'\n');
});

client.on('reconnecting', function() {
    console.log('[REDIS] Redis client reconnecting');
});

client.on('ready', function() {
    console.log('[REDIS] Redis client is ready');
});

client.on('error', function (err) {
    console.log('[REDIS] Something went wrong ' + err);
});

client.on('end', function() {
    console.log('[REDIS] Redis client disconnected');
    console.log('[REDIS] Server is going down now...');
    process.exit();
});

module.exports.set = (key, value, expTime = 60 * 60) => {
  client.set(key, value, redis.print);
  client.expire(key, expTime)
  return 'done';
}

module.exports.get = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, function (error, result) {
        if (error) {
          console.log(error);
          reject(error);
        }
        resolve(result);
    });
  });
}

module.exports.close = () => {
  client.quit();
}
