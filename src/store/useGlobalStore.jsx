import { create } from 'zustand'


const useGloBalStore = create((set) => ({
    isLogin: true,
    increase: (value) => {
        set(() => ({
           isLogin:value
        }))
    }
}))

export default useGloBalStore