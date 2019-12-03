const path = require('path')
//  提取css需要的插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//HTML生成需要的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 清除所需要的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    // entry: {
    //     index: "./src/index.js",
    //     about: "./src/about.js"
    // },   //webpack入口
    entry: {
        index: "./src/index.js"
       
    },   //webpack入口
    // output: {                  //webpack出口
    //     path: path.resolve('dist'),  //这里要绝对路径
    //     filename: 'js/[name].bundle.js'       //这里是新建出来的文件
    //     //name是动态路径
    // },
    output: {                  //webpack出口
        path: path.resolve('dist'),  //这里要绝对路径
        filename: 'js/bundle.js'       //这里是新建出来的文件
        //name是动态路径
    },
     // + 提取公共模块配置
     optimization: {
        splitChunks: {
            chunks: 'all'	// 提取所有文件的共同模块
        }
    },
   
    module:{
        rules:[
            // {
            //     test:/\.css$/,  //正则表达式
            //     use:[
            //         //这里是css的相关依赖包
            //         'style-loader',
            //         'css-loader'
            //     ],
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({	// 提取css
                    fallback: "style-loader",
                    use: ["css-loader"]
                  })
            },
            // {
            //     test: /\.less$/,		// 匹配less扩展名文件
            //     use:[				
            //         'style-loader',		// 把less代码写入到网页中
            //         'css-loader',		// 读取less的代码
            //         'less-loader'		// 解释编译less代码
            //     ]	
            // },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({	// 提取less
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                  })
            },
            
            {
                test: /\.(png|svg|jpg|gif)$/,	// 匹配图片文件
                use: [
                    {
                        // loader: "file-loader",              // 处理图片文件返回链接
                        loader: 'url-loader',
                        options: {
                            // publicPath: "./images/",   		//  引入图片时会在路径前面加上该选项
                            // outputPath: "images",            //  输出到dist下的images目录
                            limit: 60000
                        }
                    } 
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style/style.css'), // 提取到dist的style文件夹中
        new HtmlWebpackPlugin({
            template: "public/index.html"	// template指定默认html模板
        }),
        // 调用清除打包目录插件
        new CleanWebpackPlugin(),

    ]
}