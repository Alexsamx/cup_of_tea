const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   mode: 'production',
   entry: '/js/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'test')
   },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      },
      {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
      },
      ],
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};