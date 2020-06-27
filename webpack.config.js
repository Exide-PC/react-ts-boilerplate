'use strict';
const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = (env) => {
    const environment = env && env.NODE_ENV || 'dev';

    return {
        devtool: 'inline-source-map',
        entry: './src/index.tsx',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader'
                }
            ]
        },
        resolve: {
            extensions: [ '.ts', '.tsx', '.js' ],
            alias: {
                ['components']: path.resolve(__dirname, 'src/components'),
                ['consts']: path.resolve(__dirname, 'src/consts'),
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new ErrorOverlayPlugin(),
            new webpack.DefinePlugin({
                __API__: JSON.stringify('http://localhost:8080/'),
                __ENV__: JSON.stringify(environment)
            })
        ]
    }
}