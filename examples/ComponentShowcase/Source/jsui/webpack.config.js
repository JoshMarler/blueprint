module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/build/js',
    filename: 'main.js',
    sourceMapFilename: "[file].map",
     devtoolModuleFilenameTemplate: info =>
    `webpack:///${info.absoluteResourcePath.replace(/\\/g, '/')}`
  },
  devtool: "source-map",
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
          react: __dirname + '/node_modules/react'
      }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
         {
           loader: "awesome-typescript-loader",
           options: {
              useBabel: true,
              babelCore: '@babel/core'
           }
         }
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['svg-inline-loader']
      },
    ]
  },
  watchOptions: {
      ignored: [
        __dirname + '/build',
        __dirname + '/node_modules'
      ]
  }
};
