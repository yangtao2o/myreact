let isRefreshing = false // 是否正在刷新
const refresh_token = '222'
const subscribers = [] // 重试队列，每一项将是一个待执行的函数形式
const addSubscriber = listener => subscribers.push(listener)

// 刷新 token api 模拟
const refreshToken = refresh_token => {
  console.log('refreshToken 请求')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        access_token: '111',
        refresh_token: '333',
      })
    }, 100)
  })
}

// 请求token
const refreshTokenRequest = async refresh_token => {
  const res = await refreshToken(refresh_token)
  // 将所有存储到观察者数组中的请求重新执行
  notifySubscriber(res.access_token)
  // 恢复刷新
  isRefreshing = false
}

// 多个请求api模拟
const request = (target = 1) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('重新请求当前接口' + target))
    }, 100)
  })

// 执行被缓存等待的接口事件
const notifySubscriber = (newToken = '') => {
  console.log('执行被缓存等待的接口事件')
  subscribers.forEach(callback => callback(newToken))
  subscribers.length = 0
}

const responseHandler = async (res = {}, target) => {
  console.log(1)
  if (res.code === 1200) {
    console.log(2)
    if (!isRefreshing) {
      isRefreshing = true
      refreshTokenRequest(refresh_token)
    }
    console.log(3)
    // 拿到token最新结果，再次发起请求
    return new Promise((resolve, reject) => {
      console.log('new Promise')
      addSubscriber(() => resolve(request(target)))
    })
  }
  console.log('4走response')
  return true
}

export default responseHandler
