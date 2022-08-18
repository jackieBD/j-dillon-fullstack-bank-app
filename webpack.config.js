module.exports = {
    resolve: {
        fallback: {
            url: require.resolve("url/"),
            path: false,
            zlib: require.resolve("browserify-zlib")
        }
    }
}