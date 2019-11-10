// const IPFS = require('ipfs-api');
var ipfsClient = require('ipfs-http-client')

var ipfs = ipfsClient('localhost', '5001', { protocol: 'http' })

export default ipfs;