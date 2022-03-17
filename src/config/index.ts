/**
 * 环境配置封装
 */

// 获取环境 import.meta.env.MODE  默认情况下：production， development ，可以通过 --mode修改
type Env =  'production' | 'uat' | 'development'

const env: Env = <Env> import.meta.env.MODE || 'production';

const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/f4065c4134cf15501d7f858ebc96eb8e/api',
    },
    uat: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/f4065c4134cf15501d7f858ebc96eb8e/api',
    },
    production: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/f4065c4134cf15501d7f858ebc96eb8e/api',
    },
}

export default {
    env,
    mock: false,
    namespace: "manager",
    ...EnvConfig[env]
}