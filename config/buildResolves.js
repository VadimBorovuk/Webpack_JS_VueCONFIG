function buildResolves(src) {
    return {
        extensions: ['.vue', '.js'],
        alias: {
            '@': src
        }
    }
}
module.exports = buildResolves