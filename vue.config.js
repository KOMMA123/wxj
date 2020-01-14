// vue.config.js
const path = require('path')

const resolve = dir => {
	return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
	publicPath: BASE_URL,
	outputDir: 'dist', // 打包生成的生产环境构建文件的目录
	assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
	indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
	pages: undefined, // 构建多页
	productionSourceMap: false, // 开启 生产环境的 source map?
	configureWebpack: { // webpack 的配置
		// plugins: [
		// 	new MyAwesomeWebpackPlugin()
		// ]
	},
	chainWebpack: config => { // webpack的配置(链式操作)
		// 配置路径别名
		// config.resolve.alias
		//   .set('@', resolve('src'))
		//   .set('_c', resolve('src/components'))
	},
	css: {
		// modules: false, // 启用 CSS modules
		// extract: true, // 是否使用css分离插件
		// sourceMap: false, // 开启 CSS source maps?
		// loaderOptions: {
		// 	less: {
		// 		modifyVars: { // 定制主题
		// 			'primary-color': '#1DA57A',
		// 			'link-color': '#1DA57A',
		// 			'border-radius-base': '2px',
		// 		},
		// 		javascriptEnabled: true,

		// 	}
		// }
	},
	devServer: {
		port: 8080, // 端口
		proxy: {
			'/api':{
				target:'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
				changeOrigin: true,
				pathRewrite: {
				  '^/api': ''
				}
			}
		} // 设置代理
	}
}
