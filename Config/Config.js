const env = 'local'
const server = {
  local: 'http://http://192.168.86.47:3000'
}
const api ={
  apiSrvUser: '/users',
  apiSrvUserItem: '/users/{id}',
  apiSrvMenu: '/menu'
}

export default {
  env,
  server,
  api
}
