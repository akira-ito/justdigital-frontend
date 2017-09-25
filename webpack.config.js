const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Justdigital',
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
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',    // where the fonts will go
                            publicPath: '../'       // override the default path
                        }
                    }
                ]
           }
        ]
    },
    devServer: {
        contentBase: "../",
        historyApiFallback: true,
        inline: true  
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new FaviconsWebpackPlugin('./src/images/favicon.png')
    ]
};

