const path = require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");//该插件为您生成一个html文件，即展示的那个页面。
const CleanWebpackPlugin = require("clean-webpack-plugin");//把每次修改后生成的文件放在缓存中时时更新的插件！
const ExtractTextPlugin = require("extract-text-webpack-plugin")//提取各个vue文件生成的css样式。把他合并成一个样式

module.exports=env =>{ 
  if(!env){
    env={}
  };
  let plugins=[
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
          template: "./app/views/index.html" //生成的那个Html文件引导到views下那个文件
        })
      ];
  if(env.production){
    plugins.push(new webpack.DefinePlugin({
       "process.env": {
         NODE_ENV: JSON.stringify("production")//如果是生产环境，传进来以后，就给webpack本身给一个全局变量。
       }
     }),new ExtractTextPlugin("style.css")); //提取各个vue文件生成的css样式。把他合并成一个样式
  }    
  return {
    entry: ["./app/js/viewport.js","./app/js/main.js"],
    output: {
      filename: "[name].min.js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: "html-loader"
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {
            cssModules: {
              //处理vue文件中css之间互不干扰
              localIdentName: "[path][name]---[local]---[hash:base64:5]",
              camelCase: true
            },
            loaders:env.production? {
              //提取各个vue文件生成的css样式。把他合并成一个样式
              css: ExtractTextPlugin.extract({
                use:
                  "css-loader!px2rem-loader?remUnit=40&remPrecision=8",
                fallback: "vue-style-loader"
              }), // <style lang="scss">
              sass: ExtractTextPlugin.extract({
                use:
                  "css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader",
                fallback: "vue-style-loader"
              }) // <style lang="sass">
            }:{
              css:'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
              sass:'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
            }
          }
        },
        {
          test: /\.scss$/,
          loader: "style-loader!css-loader!sass-loader"
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"), //静态文件在哪里输出
      compress: true, //整个服务要开启zip压缩
      port: 9000 //服务跑在9000端口
    },
    plugins,
    resolve: {
      extensions:['.js','.vue','.json'],
      alias: {
        vue$: "vue/dist/vue.esm.js" // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  }
}