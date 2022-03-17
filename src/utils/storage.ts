/**
 * storage 二次封装
 */
import config from '../config'

export default {
    setItem(key: string, val: string) {
        let newStorage = { ...this.getStorage(), [key]: val, };
        window.localStorage.setItem(config.namespace, JSON.stringify(newStorage));
    },
    getItem(key: string) {
        return this.getStorage()[key];
    },
    getStorage() {
        return JSON.parse(window.localStorage.getItem(config.namespace) || '{}');
    },
    clearItem(key: string) {
        let storage = this.getStorage();
        storage[key] = undefined;
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))
    },
    clearAll() {
        window.localStorage.setItem(config.namespace, '{}');
    }
}