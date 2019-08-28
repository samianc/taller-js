import axios from 'axios';

class AppService {
    client: any;
    constructor() {
        this.client = (() => {
            return axios.create({
                baseURL: 'https://jsonplaceholder.typicode.com/',
                timeout: 30000,
            });
        })();
        this.client.interceptors.request.use((config: any) => {
                return config;
            }, (error: any) => {
                // console.log('REQUEST ERROR', { error });
                return Promise.reject(error);
            }
        );
    }
    getUser(userId: number) {
        return this.client.get(`todos/${ userId }`)
    }
}
export const appService = new AppService();