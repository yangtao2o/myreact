export const onLogout = () => {
  setTimeout(() => console.log('已退出！'), 100)
}

export const refreshToken = refresh_token => {
  setTimeout(() => {
    console.log('refreshToken请求')
    return {
      access_token: '111',
      refresh_token,
    }
  }, 100)
}
