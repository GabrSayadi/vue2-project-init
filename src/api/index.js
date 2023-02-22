import { post } from './request'

/**
 * ex:
 * @desc: get user info
 */
export const queryUserInfo = (data = {}) => post('/xxx/xxx/xxx', data)
