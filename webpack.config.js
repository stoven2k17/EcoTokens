const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const htmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
    mode: "development",
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('src/popup/popup.tsx'),
        options: path.resolve('src/options/options.tsx')
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx?$/,
                exclude: /node_modules/
            },
            {
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    tailwindcss,
                                    autoprefixer
                                ]
                            }
                        }
                    }
                ],
                test : /\.css$/
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/static/manifest.json'),
                    to: path.resolve('dist')
                },
            ]
        }),
        ...gethtmlPlugins([
            'popup',
            'options'
        ])
    ],
    resolve: {
        extensions: ['.ts','.tsx','.js']
    },
    output: {
        filename: '[name].js'
    }
}

function gethtmlPlugins(chunks) {
    return chunks.map(chunk => new htmlPlugin({
        title: "EcoTokens",
        filename: `${chunk}.html`,
        template: path.resolve(`src/${chunk}/${chunk}.html`),
        chunks: [chunk]
    }));
}