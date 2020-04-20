module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        path: '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }    
                }
            ]
    }    
}