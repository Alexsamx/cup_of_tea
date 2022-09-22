First of all you have to open folder with project.
Then write these commands in terminal:
npm init -y
npm install webpack --save-dev
npm install webpack-cli --save-dev
npm i css-loader sass-loader node-sass mini-css-extract-plugin --save-dev
After that you will get file package.json, there you should write 2 commands into block "scripts": {...},:
"build": "webpack",
"start": "webpack --watch"
Other files are already configured.
So you can write command:
npm run build
And you will get in the folder build assembled project.
Also you can use this command:
npm run start
For automatic processing of changes.
