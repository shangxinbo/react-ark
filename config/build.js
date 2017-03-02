const path = require('path')
const fs = require('fs')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
let appDirectory = fs.realpathSync(process.cwd())
function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath)
}

module.exports = {
    appName:'myApp',
    appBuild: resolveApp('dist'),
    appPublic: resolveApp('public'),
    appIco: resolveApp('public/favicon.ico'),
    appHtml: '../public/index.html',
    appIndexJs: './index.js',
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    appNodeModules: resolveApp('node_modules')
}