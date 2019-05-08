const env = 'local'
const server = {
  local: 'http://localhost:3000'
}
const api ={
  apiSrvUser: '/users',
  apiSrvUserItem: '/users/{id}'
}

export default {
  env,
  server,
  api
}