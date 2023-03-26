import {create} from 'zustand'
// create store
const useStore = create((set) => ({
pageNum: 0,
changeNum: (num:number) => set((state:any) =>  ({ pageNum: num }))
}))

export default useStore