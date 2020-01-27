var path = require('path');
module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'qdComponent.js',
        libraryTarget: "umd",  //一套完整的规范 cmd  amd
        library: 'qdComponent',
    },
    module:{
        rules:[
            {
               test:/\.js$/,
               loader:'babel-loader',
               include:path.join(__dirname,'src'),
               exclude:/node_modules/,
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                include:path.join(__dirname,'src'),
                exclude:/node_modules/,
                options:{
                    loaders:{
                        scss:'style-loader!css-loader!sass-loader'
                    },
 
                }
            }
        ]
    },
    plugins: [
    ]
}