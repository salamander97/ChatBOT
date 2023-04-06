const NodeCache = require('node-cache')

const config = {
    prefix: '/',
    openaikey: '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',
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config