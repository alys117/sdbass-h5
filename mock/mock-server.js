const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')
const Mock = require('mockjs')

const mockDir = path.join(process.cwd(), 'mock')

let routerOffset
function registerRoutes(app) {
  let mockLastIndex
  const { mocks } = require('./index.js')
  const mocksForServer = mocks.map(route => {
    return responseFake(route.url, route.type, route.response)
  })
  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response)
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocksForServer).length
  if (routerOffset === undefined) { routerOffset = mockLastIndex - mockRoutesLength }
  return {
    mockRoutesLength: mockRoutesLength,
    // mockStartIndex: mockLastIndex - mockRoutesLength
    mockStartIndex: routerOffset
  }
}

function unregisterRoutes() {
  Object.keys(require.cache).forEach(i => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}

// for mock server
const responseFake = (url, type, respond) => {
  // console.log('url:', url)
  return {
    url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type: type || 'get',
    response(req, res) {
      // console.log('request invoke:' + req.path)
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}
module.exports = app => {
  // parse app.body
  // https://expressjs.com/en/4x/api.html#req.body
  // 可能会影响请求真实接口，如果出现一直pending的情况，可以注释掉parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  const mockRoutes = registerRoutes(app)
  var mockRoutesLength = mockRoutes.mockRoutesLength
  var mockStartIndex = mockRoutes.mockStartIndex

  console.log('app._router.stack', mockStartIndex, mockRoutesLength)
  // app._router.stack.forEach((item, index) => { console.log(index, item.regexp) })

  // watch files, hot reload mock server
  chokidar.watch(mockDir, {
    ignored: /mock-server/,
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add') {
      // console.log('app._router.stack', mockStartIndex, mockRoutesLength)
      try {
        // remove mock routes stack
        // app._router.stack.forEach((i, idx) => console.log(idx, i)) // 打印路由
        app._router.stack.splice(mockStartIndex, mockRoutesLength)

        // clear routes cache
        unregisterRoutes()

        const mockRoutes = registerRoutes(app)
        mockRoutesLength = mockRoutes.mockRoutesLength
        mockStartIndex = mockRoutes.mockStartIndex

        /**
         * 下面调整路由在stack中的位置，否则会导致路由失效，
         * 原因是mock的路由被放到了proxy的路由之后，这样请求直接被代理到了后端服务
         */
        const tmp = app._router.stack.splice(app._router.stack.length - mockRoutesLength, mockRoutesLength)
        app._router.stack.splice(mockStartIndex, 0, ...tmp)
        // app._router.stack.forEach((i, idx) => console.log(idx, i))

        console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
      } catch (error) {
        console.log(chalk.redBright(error))
      }
    }
  })
}
