import { create } from 'zustand'
interface globalState {
    bears: number
    increase: (by: number) => void
}

const useGloBalStore = create<globalState>((set) => ({
    bears: 0,
    increase: (value) => {
        set((state) => ({
            bears: state.bears + value
        }))
    }
}))

export default useGloBalStore