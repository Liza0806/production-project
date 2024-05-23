import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode, isDev} = options

return {
    mode,
    entry: paths.entry,
    module: {
        rules: buildLoaders(options),
    },

    resolve: buildResolvers(),
    output: {
        filename: '[name].[contenthash].js',
        path: paths.build,
        clean: true
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined, // делает карту, чтобы по стектрейсу можно было отследить,
    // где ошибка из множества файлов
    devServer: isDev ? buildDevServer(options) : undefined,
}
}