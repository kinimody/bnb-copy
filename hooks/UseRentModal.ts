import { create } from "zustand";

interface  RentModalStore{
    isOpen: boolean,
    onOpen: VoidFunction,
    onClose:VoidFunction
}

const useRentModal = create<RentModalStore>((set)=>({
    isOpen: false,
    onOpen: ()=> set({isOpen: true}),
    onClose: ()=>set({isOpen: false})
}))

export default useRentModal;