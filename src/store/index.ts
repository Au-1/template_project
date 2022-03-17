import { defineStore } from "pinia"

/*
    USE
     import { useState } from "@/store/index.js";
     const store = useState()

     state: store.count
     getters: store.doubleCount
     actions: store: incrementNum(1)
*/

export const useState = defineStore('storeId', {
    state: () => ({
        count: 0,
        name: 'Eduardo',
        isAdmin: false
    }),
    getters: {
        doubleCount: (state) => state.count ** 2
    },
    actions: {
        incrementNum (num: number): void {
            this.count += num
        }
    }
})