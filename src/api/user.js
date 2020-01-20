import {axios} from '@/utils/request.js'

export function login (parameter) {
  return axios({
    url: '/api/?s=App.User.Login',
    method: 'post',
    data: {...parameter,app_key:'0D17C48B625E1FDFEB756DC884E23D7E'}
  })
}
