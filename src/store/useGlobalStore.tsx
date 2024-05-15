import { create } from 'zustand'
interface globalState {
    isLogin: boolean
    increase: (by: number) => void
}

const useGloBalStore = create<globalState>((set) => ({
    isLogin: true,
    increase: (value) => {
        set((state) => ({
           isLogin:true
        }))
    }
}))

export default useGloBalStore