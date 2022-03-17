/** 
 * utils/request.js
 */

import axios, { AxiosRequestConfig, Method } from 'axios'
import config from '../config'
//  import { ElMessage } from 'element-plus'
import storage from './storage'

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

const service = axios.create({
    timeout: 8000
})

// 请求拦截 --- 添加token
service.interceptors.request.use(req => {
    const headers = req.headers;
    const { token = "" } = storage.getItem("userInfo") || {};
    if (!headers.Authorization) headers.Authorization = "Bearer " + token;
    return req;
})

// 响应拦截
service.interceptors.response.use(res => {
    const { data: { code, data, msg } } = res;
    switch (code) {
        case 200:
            return data;
        case 500001:
            //  ElMessage.error(TOKEN_INVALID);
            //  setTimeout(()=>{router.push('/login')}, 1500);
            return Promise.reject(TOKEN_INVALID);
        default:
            //  ElMessage.error(msg || NETWORK_ERROR);
            return Promise.reject(msg || NETWORK_ERROR);
    }
})

// 核心
interface Options extends AxiosRequestConfig{ 
    method: Method
    params: object,
    mock: boolean,
    data: object
}

function request(options: Options) {
    options.method = options.method && <Method> options.method.toLowerCase() || 'get' ;
    if (options.method === 'get')
        options.params = options.data;

    let isMock = options.mock ? options.mock : config.mock;
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
    if (config.env === 'production')
        service.defaults.baseURL = config.baseApi;

    return service(options)
}

// 改变使用方法
// ['get', 'post', 'delete', 'put', 'patch'].forEach((item) => {
//     request[item] = (url, data, options) => {
//         return request({
//             url,
//             data,
//             method: item,
//             ...options
//         })
//     }
// })

export default request;