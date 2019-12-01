const path = require('path')
module.exports = {
    entry: './src/index.js',   //webpack入口
    output: {                  //webpack出口
        path: path.resolve('dist'),  //这里要绝对路径
        filename: 'bundle.js'       //这里是新建出来的文件
    },
    module:{
        rules:[
            {
                test:/\.css$/,  //正则表达式
                use:[
                    //这里是css的相关依赖包
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    }
}