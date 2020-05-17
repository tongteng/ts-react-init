import axios from 'axios'

const Enviroment = {
    test: '',
    online: ''
}

export const baseURL: string = process.env.NODE_ENV === 'development' ? '' : ''

export const URL: string = process.env.NODE_ENV === 'development' ? Enviroment.test : Enviroment.online

export const request = (options: any) => {
    if(!options.method) {
        options.method = 'GET'
    }
    if(options.method === 'GET') {
        options.params = options.data
        delete options.data
    }
    options.url = baseURL + options.url

    return axios(options).then((res: any) => {
        let result: any = null
        if(res.data) {
            result = res.data
        }
        return result
    }).catch(() => {
        return null
    })
}