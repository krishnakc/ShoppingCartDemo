module.exports = {
    entry : './src/main.js',
    output: {
        path: '__build__',
        filename: '__main__.js',
        publicPath: '__build__'
    },
    resolve: {
        extensions: [ '', '.js', '.css', '.jsx' ]
    },
    module: {
        loaders: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?stage=0&loose=all' }]
    },
    devServer: {
        inline:true,
        contentBase: './src',
        port:8200
    }
};