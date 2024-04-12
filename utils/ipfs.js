const { create } = require('ipfs-http-client');
const ipfs = create({
    url: '/ip4/127.0.0.1/tcp/5001'
})
module.exports = ipfs