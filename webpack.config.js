const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Mercado Test',
  template: './src/index.html',
  filename: 'index.html',
  hash: true,
  inject: true,
})

module.exports = {
  devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                use: ["babel-loader"], 
                exclude: /node_modules/ 
            },
            { 
                test: /\.scss$/, 
                use: [
                    'style-loader', 
                    { 
                        loader: 'css-loader', 
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                  require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ],
            },
        ]
    },
    devServer: {
        contentBase: "../",
        historyApiFallback: true,
        inline: true  
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
};

